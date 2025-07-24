set -e

pm2 delete emadunan-hub

npm run clean
npm install

pm2 start ecosystem.config.js