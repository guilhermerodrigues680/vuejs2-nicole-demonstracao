#!/usr/bin/env sh

# GitHub Pages - Deploying a Static Site | Vite
# https://vitejs.dev/guide/static-deploy.html#github-pages

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# spa no GitHub Pages: 404 == index.html
cp index.html 404.html

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# bypass Jekyll processing on GitHub Pages
echo '' > .nojekyll

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:guilhermerodrigues680/vuejs2-nicole-demonstracao.git main:gh-pages

# OBS: Lembrar de verificar `publicPath` no `vue.config.js`

cd -