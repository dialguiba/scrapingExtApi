import mongoose from "mongoose";
import config from "../configs";

const {
  backing: {
    databases: {
      mongo: { uri },
    },
  },
} = config;

export const connectionMongo = () =>
  mongoose
    .connect(uri, {
      keepAlive: true,
      socketTimeoutMS: 0,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("[MONGO] Mongo is connect");
    })
    .catch(async (mongoError) => {
      try {
        const date = new Date();
        const formDate = date.toISOString.slice(0, 19);
        console.log(`[${formDate}] - ERROR: [${mongoError.message}]`);
        setTimeout(connectionMongo, 10000);
      } catch (error) {
        console.log("connectionMongo -> error", error);
      }
    });

//When successfully connected
mongoose.connection.on("connected", () => {
  console.log("[MONGO] Mongo prev connected");
});

//If the connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("[MONGO] Mongoose default connection error: " + err);
});

//When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("[MONGO] Mongoose default connection disconnected");
});
