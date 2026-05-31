#!/bin/bash
set -euo pipefail

echo "🚀 Starting Deployment..."

# =========================
# Environment setup
# =========================

export PATH="$HOME/.nvm/versions/node/v22.21.1/bin:$PATH"

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR" || {
  echo "❌ Failed to enter project directory"
  exit 1
}

echo "📁 Project: $PROJECT_DIR"

# =========================
# PM2 cleanup
# =========================

echo "🧹 Cleaning PM2 process..."
pm2 delete emadunan-hub || true

# =========================
# Build steps
# =========================

echo "📦 Cleaning project..."
npm run clean

echo "📥 Installing dependencies..."
npm install

echo "🏗️ Building project..."
npm run build

# =========================
# Start application
# =========================

echo "🚀 Starting app via PM2..."
pm2 start ecosystem.config.js --only emadunan-hub

sleep 3

# =========================
# Verify process started
# =========================

echo "📊 PM2 status:"
pm2 list

# =========================
# CRITICAL FIX: persist state
# =========================

echo "💾 Saving PM2 state..."
pm2 save

# =========================
# Ensure startup script exists (safe to re-run)
# =========================

pm2 startup systemd || true

echo "✅ Deployment completed successfully"