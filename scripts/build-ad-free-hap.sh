#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
: "${HOS_SDK_HOME:?Set HOS_SDK_HOME to a HarmonyOS API 26 SDK}"
command -v ohpm >/dev/null
command -v hvigorw >/dev/null

# Signing materials are deliberately absent. Never replace a developer's profile.
if [[ ! -e build-profile.json5 ]]; then
  cat > build-profile.json5 <<'PROFILE'
{
  "app": {
    "products": [{
      "name": "default",
      "compatibleSdkVersion": "6.0.2(22)",
      "targetSdkVersion": "26.0.0",
      "runtimeOS": "HarmonyOS"
    }],
    "buildModeSet": [{ "name": "debug" }, { "name": "release" }]
  },
  "modules": [{
    "name": "entry", "srcPath": "./entry",
    "targets": [{ "name": "default", "applyToProducts": ["default"] }]
  }]
}
PROFILE
fi
if [[ ! -e .npmrc ]]; then
  printf '%s\n' '@ohos:registry=https://repo.harmonyos.com/npm/' > .npmrc
fi
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=4096}"
ohpm install --all
hvigorw --mode module -p product=default -p module=entry@default -p buildMode=release assembleHap --no-daemon --no-parallel

hap=entry/build/default/outputs/default/entry-default-unsigned.hap
[[ -s "$hap" ]] || { echo 'Expected unsigned HAP was not produced' >&2; exit 1; }
python3 - "$hap" <<'PY'
import hashlib, json, sys, zipfile
from pathlib import Path
source = Path(sys.argv[1])
with zipfile.ZipFile(source) as archive:
    bad = archive.testzip()
    if bad: raise SystemExit('Corrupt HAP member: ' + bad)
    app = json.loads(archive.read('module.json'))['app']
    if app.get('versionName') != '3.9.0': raise SystemExit('Wrong application version')
    if 'ets/modules.abc' not in archive.namelist(): raise SystemExit('Missing compiled ArkTS')
output = Path('build/ad-free')
output.mkdir(parents=True, exist_ok=True)
name = 'HarmonyX-v3.9.0-no-ads-unsigned.hap'
(output / name).write_bytes(source.read_bytes())
digest = hashlib.sha256((output / name).read_bytes()).hexdigest()
(output / 'SHA256SUMS').write_text(digest + '  ' + name + '\n')
print('Validated unsigned HAP:', output / name)
print('SHA256:', digest)
PY
