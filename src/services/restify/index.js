import restify from "restify";
import { Router } from "restify-router";
import signale from "signale";
import corsMiddleware from "restify-cors-middleware2";
import logger from "morgan";
import { allowOrigins } from "./utils";
import RouterManager from "./routes";
import { connectionMongo } from "../../datalayer/connections/multimongo.connection";

const router = new Router();

connectionMongo();

const server = restify.createServer({
  name: "Servidor backend",
});

const cors = corsMiddleware({
  allowHeaders: ["X-XSRF-TOKEN", "Authorization"],
  credentials: false,
  exposeHeaders: [],
  origins: ["*"],
});

server.use(logger("dev"));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

router.add("/api/v1", RouterManager);
router.applyRoutes(server);

server.listen(process.env.PORT || 8000, () => {
  const launchDate = new Date();
  signale.success(`[App] server launch ${launchDate}`);
  signale.success(`Explore this api in: http://localhost:${process.env.PORT || 8000}`);
});
