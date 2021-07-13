module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  admin: {
    url: env("PUBLIC_ADMIN_URL", "/dashboard"),
    autoOpen: true,
    serveAdminPanel: env.bool("SERVE_ADMIN", true),
  },
});
