const mongoClient = require("mongodb").MongoClient;

const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
const CLUSTER = process.env.MONGO_CLUSTER;
//intital db state null
const state = {
   db: null,
};

module.exports.connect = function (done) {
   // const url = 'mongodb://localhost:27017/'
   const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;
   const dbname = "fitness";

   mongoClient.connect(URI, (err, data) => {
      if (err) {
         console.log("error");
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
