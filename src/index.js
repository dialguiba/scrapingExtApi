const restify = require("restify");
const mongoose = require("mongoose");
const config = require("./config");
const server = restify.createServer();

//Middleware
server.use(restify.plugins.bodyParser());

server.use(function crossOrigin(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  return next();
});

// Listen
server.listen(config.PORT, () => {
  mongoose.set("useFindAndModify", false);
  mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

const database = mongoose.connection;
database.on("error", (err) => {
  console.log(err);
});

database.once("open", () => {
  require("./routes/profiles")(server);
  console.log(`Server running on Port: ${config.PORT}`);
});
