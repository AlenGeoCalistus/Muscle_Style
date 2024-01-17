const mongoClient = require("mongodb").MongoClient;

//initial db state null
const state = {
   db: null,
};

module.exports.connect = function (done) {
   // const url = 'mongodb://localhost:27017/'
   // const URI = process.env.MONGO_URI;
   const url = process.env.MONGO_URI;
   const dbname = "fitness";

   mongoClient.connect(url, (err, data) => {
      if (err) {
         console.log("error",err);
         return done(err);
      } else {
         state.db = data.db(dbname);
         done();
      }
   });

   module.exports.get = () => {
      return state.db;
   };
};
