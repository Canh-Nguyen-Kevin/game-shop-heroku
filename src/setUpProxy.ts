export const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app: any) => {
  app.use(
    createProxyMiddleware("/products", {
      target: "https://game-shop-api.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
