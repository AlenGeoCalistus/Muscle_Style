const mongoClient = require("mongodb").MongoClient;

const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
const CLUSTER = process.env.MONGO_CLUSTER;
//initial db state null
const state = {
   db: null,
};

module.exports.connect = function (done) {
   // const url = 'mongodb://localhost:27017/'
   const URI = process.env.MONGO_URI;
   const dbname = "fitness";

   mongoClient.connect(URI, (err, data) => {
      if (err) {
         console.log("errorr",);
         return done(err);
      } else {
         state.db = data.db(dbname);
         done();
      }
   });
   module.exports.get = () => {
      console.log("error");
      return state.db;
   };
};
