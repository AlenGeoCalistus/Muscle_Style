const mongoClient = require("mongodb").MongoClient;

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
         console.log("error",);
         return done(err);
      } else {
         state.db = data.db(dbname);
         return done();
      }
   });

   module.exports.get = () => {
      console.log("error in getting state.db");
      return state.db;
   };
};
