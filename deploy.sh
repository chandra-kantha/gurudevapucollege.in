#!/bin/bash

# Stop if commit message is missing
if [ -z "$1" ]; then
  echo "❌ Commit message required"
  echo "Usage: gacp \"your commit message\""
  exit 1
fi

git add .

git commit -m "$1" || exit 1

git push