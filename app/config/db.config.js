module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "sameer",
    DB: "practicesequelize",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  