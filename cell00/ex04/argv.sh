#!/bin/sh

[ "$#" -eq 0 ] && { echo "No arguments supplied"; exit; }

i=0
for arg in "$@"; do
  echo "$arg"
  i=$((i+1))
  [ "$i" -eq 3 ] && break
done

