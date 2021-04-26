import { profileActuator } from "../../../datalayer/actuators/profile.actuator";

class PROFILECONTROLLER {
  async multipleStorage(documents) {
    return await profileActuator.storeDocuments(documents);
  }

  async storage(document) {
    return await profileActuator.storeDocument(document);
  }

  async read() {
    return await profileActuator.readDocument();
  }

  async multipleRead() {
    return await profileActuator.readDocuments();
  }
}
const profileController = new PROFILECONTROLLER();

export { profileController };
