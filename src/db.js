import Sequelize from "sequelize";

let db = null;

module.exports = app => {
  const config = app.libs.config;
  console.log("desde config: ", config);
  if (!db) {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
  }
  return db;
};
