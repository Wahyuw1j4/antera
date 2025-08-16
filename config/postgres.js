import { Sequelize } from "sequelize";

const postgres = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

const testConnection = async () => {
  try {
    await postgres.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export {
    postgres,
    testConnection
};
