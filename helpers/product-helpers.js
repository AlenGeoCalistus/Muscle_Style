var db = require("../config/connection");
var collection = require("../config/collections");
const async = require("hbs/lib/async");
const { promise, reject } = require("bcrypt/promises");
var objectId = require("mongodb").ObjectId;

module.exports = {
   addProduct: (product, callback) => {
      db.get()
         .collection(collection.PRODUCT_COLLECTIONS)
         .insertOne(product)
         .then((data) => {
            callback(data.insertedId);
         });
   },
   getAllProducts: async () => {
      try {
         const productCollection = db
            .get()
            .collection(collection.PRODUCT_COLLECTIONS);
         if (!productCollection) {
            throw new Error(
               `Collection ${collection.PRODUCT_COLLECTIONS} is null`
            );
         }
         let products = await productCollection.find().toArray();
         return products;
      } catch (error) {
         console.error("Error in getAllProducts:", error);
         throw error;
      }
   },

   deleteProduct: (prodId) => {
      return new Promise((resolve, reject) => {
         db.get()
            .collection(collection.PRODUCT_COLLECTIONS)
            .deleteOne({ _id: objectId(prodId) })
            .then((response) => {
               //    console.log(response);
               resolve(response);
            });
      });
   },
   getProductDetails: (prodId) => {
      return new Promise((resolve, reject) => {
         db.get()
            .collection(collection.PRODUCT_COLLECTIONS)
            .findOne({ _id: objectId(prodId) })
            .then((product) => {
               resolve(product);
            });
      });
   },
   updateProduct: (prodId, proDetails) => {
      return new Promise((resolve, reject) => {
         let updateData = {
            brand: proDetails.brand,
            name: proDetails.name,
            category: proDetails.category,
            discription: proDetails.discription,
            price: proDetails.price,
            discount: proDetails.discount,
            offer: proDetails.offer,
         };
         if (proDetails.image_url) {
            updateData.image_url = proDetails.image_url;
         }
         db.get()
            .collection(collection.PRODUCT_COLLECTIONS)
            .updateOne(
               { _id: objectId(prodId) },
               {
                  $set: updateData,
               }
            )
            .then((response) => {
               resolve();
            });
      });
   },
   // addCoupons: (coupon) => {
   //     let couponObj ={
   //         couponCode:coupon.couponcode,
   //         discountVal:coupon.discountvalue,
   //         offerStatus:true,
   //         users:[]
   //     }
   //     return new Promise((resolve, reject) => {
   //         db.get().collection(collection.COUPONS_COLLECTIONS).insertOne({couponObj }, {
   //         }).then((response) => {
   //             resolve();
   //         })
   //     })
   // },
   viewCoupons: () => {
      return new Promise(async (resolve, reject) => {
         let allCoupons = await db
            .get()
            .collection(collection.COUPONS_COLLECTIONS)
            .find()
            .toArray();
         resolve(allCoupons);
      });
   },

   getAllUsers: () => {
      return new Promise(async (resolve, reject) => {
         let Users = await db
            .get()
            .collection(collection.USER_COLLECTIONS)
            .find()
            .toArray();
         resolve(Users);
      });
   },
   getUserDetails: (UserId) => {
      return new Promise((resolve, reject) => {
         db.get()
            .collection(collection.USER_COLLECTIONS)
            .findOne({ _id: objectId(UserId) })
            .then((user) => {
               resolve(user);
            });
      });
   },
   updateUser: (userId, userDetails) => {
      return new Promise((resolve, reject) => {
         db.get()
            .collection(collection.USER_COLLECTIONS)
            .updateOne(
               { _id: objectId(userId) },
               {
                  $set: {
                     name: userDetails.name,
                     email: userDetails.email,
                     phone: userDetails.phone,
                  },
               }
            )
            .then((response) => {
               resolve();
            });
      });
   },
   deleteUser: (userId) => {
      return new Promise((resolve, reject) => {
         db.get()
            .collection(collection.USER_COLLECTIONS)
            .deleteOne({ _id: objectId(userId) })
            .then((response) => {
               //   console.log(response);
               resolve(response);
            });
      });
   },
   addUser: (user, callback) => {
      // console.log(user);

      db.get()
         .collection("user")
         .insertOne(user)
         .then((data) => {
            //   console.log('aaaaaaaa',data);
            callback(data.insertedId);
         });
   },

   getBlockedUsers: () => {
      return new Promise(async (resolve, reject) => {
         let blockedUsers = await db
            .get()
            .collection(collection.USER_COLLECTIONS)
            .find({ blockStatus: { $eq: true } })
            .toArray();
         resolve(blockedUsers);
      });
   },

   getAllOrders: () => {
      return new Promise(async (resolve, reject) => {
         let orders = await db
            .get()
            .collection(collection.ORDER_COLLECTIONS)
            .find()
            .toArray();
         // console.log('orderedOrdersssssssssssssssssss',orders);
         resolve(orders);
      });
   },
   deleteCoupon: (coupId) => {
      return new Promise((resolve, reject) => {
         db.get()
            .collection(collection.COUPONS_COLLECTIONS)
            .deleteOne({ _id: objectId(coupId) })
            .then((response) => {
               // console.log(response);
               resolve(response);
            });
      });
   },
};
