import { Router } from "restify-router";

import ProfileRouter from "./profile.route";

const RouterManager = new Router();

RouterManager.add("/profile", ProfileRouter);

export default RouterManager;
