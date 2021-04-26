import ProfileModel from "../models/mongo/profile.model";

class PROFILEACTUATOR {
  async readDocuments() {
    const documents = await ProfileModel.find({});

    return documents;
  }

  async storeDocuments(documents) {
    const newDocuments = await ProfileModel.insertMany(documents);

    return newDocuments;
  }
  async storeDocument(documents) {
    const documentToSave = new ProfileModel(document);
    const newDocument = await documentToSave.save();

    return newDocument;
  }

  async createDocument(document) {
    const documentToCreate = await ProfileModel.create(document);

    return documentToCreate;
  }
}

const profileActuator = new PROFILEACTUATOR();

export { profileActuator };
