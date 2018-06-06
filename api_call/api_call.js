$(function() {
const https = require("https");
const IntrinioRealtime = require('intrinio-realtime')
const AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;
const [,,...input] = process.argv;

// var Sequelize = require('sequelize');
// // var sequelize = require('../config/db.js');

// module.exports = function(application, req, res){

// var sequelize = new Sequelize("testDB", "root", "2823", {
//     host: "localhost",
//     dialect: "mysql"
// })

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//     var test = sequelize.define("test", {
//       name: Sequelize.STRING,
//       symbol: Sequelize.STRING.toUpper(),
//       price: Sequelize.INTEGER
//   })
//     test.sync({force: true}).then(() => {
//     test.create({ name: 'unknown', symbol: "unknown", price: "something" })
//     test.create({ name: 'unknown', symbol: "unknown", price: "something" })
//     test.create({ name: 'unknown', topping: "unknown", price: "something" })

//   })}).then(test.findAll().then(tests => {
//     console.log(tests.get(data));
//   }))
// //   test.sync({force: true}).then(() => {
// //     test.create({ name: 'unknown', symbol: "unknown", price: "something" })
// //     test.create({ name: 'unknown', topping: "unknown", price: "something" })
// //     // INSERT INTO testDB (name, symbol, price) 
// //     // VALUES ( 

// //     // ALTER TABLE testDB
// //     // ADD column_name;
// //   });
//  // })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// }


// //  Create an IntrinioRealtime instance
//   var ir = new IntrinioRealtime({
//     username: "5ea1efe25726d96bd3301b88a9b1438d",
//     password: "9c91398114882d5df13a2469e7b9864f",
//     provider: "iex"
//   })
   
//   // Listen for quotes
//   ir.onQuote(quote => {
//     var { ticker, type, price, size, timestamp } = quote
//     console.log("QUOTE: ", ticker, type, price, size, timestamp)
//   })
   
//   // Join channels
//   ir.join("AAPL", "MSFT", "GE")
//   console.log(ir)




// $(function() {

// $('#searchstock').on('click', function (event) {
//   console.log('btn-run-search pressed');


let username = "5ea1efe25726d96bd3301b88a9b1438d";
let password = "9c91398114882d5df13a2469e7b9864f";
let auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

let baseURL = "https://api.intrinio.com/companies?ticker=AAPL"  //after figuring out below delete from question mark
let baseURL2 = "https://api.intrinio.com/prices?identifier={input+}"
let params = {
    // api params go here
    identifier: input,
    item: "",
    start_date: "",
    end_date: "",

};

let queryURL = baseURL + "?ticker=" + input;
let queryURL2 = baseURL2 + input + "}"


let request = https.request({
    method: "GET",
    host: "api.intrinio.com",
    path: "/prices?identifier=" + $("#search").val().trim(),     //figure out then change to queryURL
    headers: {
        "Authorization": auth
    }
}, function(response) {
    let json = "";
    response.on('data', function (chunk) {
        json += chunk;
    });
    response.on('end', function() {
        let company = JSON.parse(json);
       // console.log([company.name + ", " + company.ticker]);
        console.log(company);

    });
});

request.end();

// })

// }) 


// let apiKey = "LFMT1TZ5KQGSDKHN";
// let alphaVantageAPI = new AlphaVantageAPI(apiKey, 'compact', true);

// alphaVantageAPI.getIntradayData(input, '15min')
//     .then(intradayData => {
//         console.log("Intraday data:");
//         console.log(intradayData);
//     })
//     .catch(err => {
//         console.error(err);
//     });
}) 