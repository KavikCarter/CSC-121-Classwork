#!/usr/bin/env bash
# Downloads web-sized copies of every portfolio piece from Google Drive into
# assets/img/work/<id>.jpg. Afterwards set PHC_LOCAL_IMAGES = true in
# assets/js/projects.js. Run from anywhere: bash tools/fetch-drive-images.sh
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets/img/work
WIDTH="${WIDTH:-2000}"
# id|driveId pairs pulled from projects.js
grep -E '^    (id|drive): ' assets/js/projects.js | sed -E 's/.*"(.*)".*/\1/' | paste -d'|' - - |
while IFS='|' read -r id drive; do
  out="assets/img/work/$id.jpg"
  echo "→ $id"
  curl -fsSL "https://drive.google.com/thumbnail?id=$drive&sz=w$WIDTH" -o "$out" || echo "   failed: $id"
done
echo "Done. Now set window.PHC_LOCAL_IMAGES = true in assets/js/projects.js"
