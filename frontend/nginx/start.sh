#!/bin/bash

set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
INDEX_HTML_PATH="$DIR/html/index.html"

"$DIR/inline-runtime-env.sh" VITE "$INDEX_HTML_PATH" > "$INDEX_HTML_PATH.new"
mv "$INDEX_HTML_PATH.new" "$INDEX_HTML_PATH"

nginx -g "daemon off;"