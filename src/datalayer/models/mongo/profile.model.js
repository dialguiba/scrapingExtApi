import mongoose, { Schema } from "mongoose";
const timestamp = require("mongoose-timestamp");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  resumen: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  linkedIn: {
    type: String,
    required: false,
  },
});

const ExperiencesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
  direction: {
    type: String,
    required: false,
  },
});

const EducationsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  university: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
});

const ProfileSchema = new mongoose.Schema({
  contact: {
    type: ContactSchema,
    required: false,
  },
  about: {
    type: String,
    required: false,
  },
  experiences: {
    type: [ExperiencesSchema],
    required: false,
  },
  educations: {
    type: [EducationsSchema],
    required: false,
  },
});

ProfileSchema.plugin(timestamp);

const ProfileModel = mongoose.model("Profile", ProfileSchema);

export default ProfileModel;
