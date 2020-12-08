
const appRouter = require("./routes");

function initApp(api) {
  api.use("/", appRouter);
}

module.exports = { initApp };
