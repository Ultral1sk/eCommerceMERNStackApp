
// const { ObjectId } = require('mongodb');

// const brands =
// [
//   {
//     // "_id" : ObjectId("5b2c11481470fbaecd159dfd"),
//     "name" : "Fender",
//     "__v" : 0
//   },

//   {
//     // "_id" : ObjectId("5b2c11d2d37177aedfd6d962"),
//     "name" : "Ibanez",
//     "__v" : 0
//   },

//   {
//     // "_id" : ObjectId("5b2c1216d37177aedfd6d963"),
//     "name" : "Charvel",
//     "__v" : 0
//   },

//   {
//     // "_id" : ObjectId("5b2c1264d37177aedfd6d964"),
//     "name" : "Jackson",
//     "__v" : 0
//   },

//   {
//     // "_id" : ObjectId("5b2c1267d37177aedfd6d965"),
//     "name" : "Gibson",
//     "__v" : 0
//   },

//   {
//     // "_id" : ObjectId("5b2c12a1d37177aedfd6d966"),
//     "name" : "Cort",
//     "__v" : 0
//   },

//   {
//     // "_id" : ObjectId("5b2c12a4d37177aedfd6d967"),
//     "name" : "Schecter",
//     "__v" : 0
//   },

//   {
//     // "_id" : ObjectId("5b2c132406cf65af3475d28e"),
//     "name" : "Reverend",
//     "__v" : 0
//   },

//   {
//     // "_id" : ObjectId("5b2c171c357cb8b03cb04342"),
//     "name" : "Ernie ball",
//     "__v" : 0
//   }
// ] 



// const products = [{
//   "_id" : ObjectId("5b2d3648ca6a03cd33af924c"),
//   "sold" : 38,
//   "name" : "AZ2040",
//   "description" : "Super awesome guitar",
//   "price" : 2000,
//   "brand" : ObjectId("5b2c11d2d37177aedfd6d962"),
//   "shipping" : true,
//   "available" : true,
//   "wood" : ObjectId("5b2c1c88255983b4795f8fdb"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d38027d75e2cdcb31cf04"),
//   "sold" : 4,
//   "name" : "Roadcore",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 1500,
//   "brand" : ObjectId("5f297c06aed5b016cc36708e"),
//   "shipping" : true,
//   "available" : true,
//   "wood" : ObjectId("5b2c1c0981e781b44909627d"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d38217d75e2cdcb31cf05"),
//   "sold" : 15,
//   "name" : "JEM UV7",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 3500,
//   "brand" : ObjectId("5b2c11d2d37177aedfd6d962"),
//   "shipping" : true,
//   "available" : false,
//   "wood" : ObjectId("5b2c1c81255983b4795f8fda"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d384b7d75e2cdcb31cf06"),
//   "sold" : 0,
//   "name" : "TELE-ub23",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 600,
//   "brand" : ObjectId("5b2c11481470fbaecd159dfd"),
//   "shipping" : false,
//   "available" : false,
//   "wood" : ObjectId("5b2c1c0981e781b44909627d"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d390d7d75e2cdcb31cf07"),
//   "sold" : 9,
//   "name" : "FR7",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 1300,
//   "brand" : ObjectId("5b2c12a4d37177aedfd6d967"),
//   "shipping" : false,
//   "available" : true,
//   "wood" : ObjectId("5b2c1c81255983b4795f8fda"),
//   "frets" : 24,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d39407d75e2cdcb31cf08"),
//   "sold" : 0,
//   "name" : "Blue6",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 700,
//   "brand" : ObjectId("5b2c12a1d37177aedfd6d966"),
//   "shipping" : true,
//   "available" : true,
//   "wood" : ObjectId("5b2c1c81255983b4795f8fda"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d39697d75e2cdcb31cf09"),
//   "sold" : 4,
//   "name" : "PET967",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 1200,
//   "brand" : ObjectId("5b2c171c357cb8b03cb04342"),
//   "shipping" : true,
//   "available" : true,
//   "wood" : ObjectId("5b2c1c0981e781b44909627d"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d39987d75e2cdcb31cf0a"),
//   "sold" : 0,
//   "name" : "Robot 5",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 1200,
//   "brand" : ObjectId("5b2c1267d37177aedfd6d965"),
//   "shipping" : true,
//   "available" : true,
//   "wood" : ObjectId("5b2c1c0981e781b44909627d"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d39bd7d75e2cdcb31cf0b"),
//   "sold" : 3,
//   "name" : "Dinky 7",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 600,
//   "brand" : ObjectId("5b2c1264d37177aedfd6d964"),
//   "shipping" : true,
//   "available" : true,
//   "wood" : ObjectId("5b2c1c88255983b4795f8fdb"),
//   "frets" : 24,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d39d97d75e2cdcb31cf0c"),
//   "sold" : 15,
//   "name" : "RoadCaster",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 1,
//   "brand" : ObjectId("5b2c11481470fbaecd159dfd"),
//   "shipping" : true,
//   "available" : false,
//   "wood" : ObjectId("5b2c1c0981e781b44909627d"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// },

// {
//   "_id" : ObjectId("5b2d4b70e4b4a1d22d374f8b"),
//   "sold" : 12,
//   "name" : "ACU700",
//   "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//   "price" : 1,
//   "brand" : ObjectId("5b2c1216d37177aedfd6d963"),
//   "shipping" : true,
//   "available" : true,
//   "wood" : ObjectId("5b2c1c81255983b4795f8fda"),
//   "frets" : 22,
//   "publish" : true,

//   "__v" : 0
// }
// ]

// module.exports = products, brands