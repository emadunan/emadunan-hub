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
    {
      name: "emadunan-work",
      script: "sh",
      args: "-c 'npm run start'",
      env: {
        NODE_ENV: "production",
        PORT: 3033,
      },
    },
  ],
};
