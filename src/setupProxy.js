const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/newtongji1", {
      target: "http://portal.cdggzy.com",
      changeOrigin: true,
    })
  );
};
