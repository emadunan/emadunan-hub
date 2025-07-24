#!/bin/bash
set -e

# Ensure Node.js tools are in the PATH
export PATH=$HOME/.nvm/versions/node/v22.14.0/bin:$PATH

pm2 delete emadunan-hub

npm run clean
npm install
npm run build

pm2 start ecosystem.config.js