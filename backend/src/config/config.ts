interface IConfig {
  DB: {
    URI: string;
    USER: string;
    PASSWORD: string;
  };
  PORT: string | number;
}

export default <IConfig>{
  DB: {
    URI: process.env.DB_URI || "mongodb://mongo:27017/developmentchallenge",
    USER: process.env.DB_USER || "",
    PASSWORD: process.env.DB_PASS || "",
  },

  PORT: process.env.PORT || 4000,
};
