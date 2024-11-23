#!/bin/bash

set -euo pipefail

VAR_PREFIX=$1
INDEX_HTML_PATH=$2

if [[ $VAR_PREFIX == "" || $INDEX_HTML_PATH == "" ]]; then
  echo "usage: inline-runtime-env.sh VAR_PREFIX PATH_TO_INDEX_HTML"
  exit 1
fi

if [[ ! -f $INDEX_HTML_PATH ]]; then
  echo "error: $INDEX_HTML_PATH is not a file"
  exit 1
fi

ENV=$(env)
RUNTIME_ENV_JSON=""

# Store VITE_ variables for placeholder replacement
declare -A VITE_VARS

for VAR in $ENV; do
  # env vars begins with prefix or PUBLIC_URL
  if [[ $VAR == ${VAR_PREFIX}_* || $VAR == "PUBLIC_URL" ]]; then
    # split the "=" separated key and value
    IFS='=' read -ra VAR_TOKENS <<<"$VAR"
    # add var to the json, while escaping " character
    RUNTIME_ENV_JSON="$RUNTIME_ENV_JSON\"${VAR_TOKENS[0]//\"/\\\\\"}\":\"${VAR_TOKENS[1]//\"/\\\\\"}\","
  fi
  
  # Store VITE_ variables in associative array
  if [[ $VAR == VITE_* ]]; then
    IFS='=' read -ra VAR_TOKENS <<<"$VAR"
    VITE_VARS[${VAR_TOKENS[0]}]="${VAR_TOKENS[1]}"
  fi
done

if [[ $RUNTIME_ENV_JSON != "" ]]; then
  # remove trailing comma
  RUNTIME_ENV_JSON=${RUNTIME_ENV_JSON%,*}
  # escape < character, prevents XSS
  RUNTIME_ENV_JSON=${RUNTIME_ENV_JSON//</\\\&lt;}
  # escape / character, prevents crashing sed
  RUNTIME_ENV_JSON=${RUNTIME_ENV_JSON//\//\\/}
fi

# First replace the runtime env JSON
TEMP_FILE=$(mktemp)
sed -e "s/____RUNTIME_ENV_JSON____/{$RUNTIME_ENV_JSON}/" "$INDEX_HTML_PATH" > "$TEMP_FILE"

# Then replace all %VITE_*% placeholders
for key in "${!VITE_VARS[@]}"; do
  value=${VITE_VARS[$key]}
  # Escape special characters in value
  value=${value//\//\\/}
  value=${value//&/\\\&}
  sed -i "s/%${key}%/${value}/g" "$TEMP_FILE"
done

cat "$TEMP_FILE"
rm "$TEMP_FILE"