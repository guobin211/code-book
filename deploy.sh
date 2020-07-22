#!/usr/bin bash

set -env

npm run doc:build

cd build

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:guobin211/design_code.git master:gh-pages

cd -

