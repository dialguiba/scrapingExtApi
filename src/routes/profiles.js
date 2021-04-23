const errors = require("restify-errors");
const Profile = require("../models/Profile");

module.exports = (server) => {
  // Fetch All Profiles
  server.get("/api/profiles", async (req, res, next) => {
    try {
      const profiles = await Profile.find({});
      res.send(profiles);
      next();
    } catch (error) {
      return next(new errors.InvalidContentError(error));
    }
  });

  // Add a new profile to list
  server.post("/api/profiles", async (req, res, next) => {
    /* Recieve an string of arrays */
    let data = JSON.parse(req.body);

    data.forEach(async (el) => {
      const { contact, about, experiences, educations } = el;

      const profile = new Profile({
        contact,
        about,
        experiences,
        educations,
      });

      try {
        const newProfile = await profile.save();
        res.send(201);
        next();
      } catch (error) {
        return next(new errors.InternalError(error.message));
      }
    });
  });
};
