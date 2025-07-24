module.exports = {
  apps: [
    {
      name: "emadunan-hub",
      script: "sh",
      args: "-c 'npm run start'",
      env: {
        NODE_ENV: "production",
        PORT: 3030,
      },
    },
  ],
};
