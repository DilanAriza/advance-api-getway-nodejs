const ROUTES = [
  {
    url: '/users',
    auth: false,
    creditCheck: false,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5
    },
    proxy: {
      target: "http://localhost:3000",
      changeOrigin: true,
      pathRewrite: {
        [`^/users`]: '',
      },
    }
  },
  {
    url: '/premium',
    auth: true,
    creditCheck: true,
    proxy: {
      target: "https://www.google.com",
      changeOrigin: true,
      pathRewrite: {
        [`^/premium`]: '',
      },
    }
  }
]

exports.ROUTES = ROUTES;