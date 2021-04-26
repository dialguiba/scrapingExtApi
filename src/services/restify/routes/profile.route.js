import { Router } from "restify-router";

import { profileController } from "../controllers/profile.controller";

const ProfileRouter = new Router();

ProfileRouter.get("/read-all", async (req, res) => {
  try {
    let documents = await profileController.multipleRead();

    res.send(documents);
  } catch (error) {
    return next(new errors.InvalidContentError(error));
  }
});

ProfileRouter.post("/storage", async (req, res) => {
  try {
    const { body } = req;

    let data = JSON.parse(body);

    let newDocuments = await profileController.multipleStorage(data);

    return res.json({
      data: newDocuments,
      success: true,
    });
  } catch (error) {
    return res.json({
      data: null,
      success: false,
      error: error.message,
    });
  }
});

export default ProfileRouter;
