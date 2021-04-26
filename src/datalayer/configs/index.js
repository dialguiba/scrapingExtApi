const config = {
  backing: {
    databases: {
      mongo: {
        uri: `${process.env.MONGODB_URI}`,
      },
    },
  },
};

export default config;
