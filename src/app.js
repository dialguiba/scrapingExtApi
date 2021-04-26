const app = process.env.APPLICATION;
console.log("🚀 ~ app", app);

require("@babel/register")({
  extends: "./.babelrc",
  ignore: [/node_modules/],
});
require(`./handler/${app}.js`);
