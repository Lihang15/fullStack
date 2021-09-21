#!/bin/bash

set -ex
real_tag="a.xax"
if echo $real_tag | grep -E '^(v|t|a)[0-9].*$';then
   echo "xx$real_tag"
fi
