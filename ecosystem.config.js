module.exports = {
  apps : [{
    name: "app",
    script: "./server.js",
    env: {
      NODE_ENV: "development",
    },
    watch: true,
    env_production: {
      NODE_ENV: "production",
    }
  }]
}