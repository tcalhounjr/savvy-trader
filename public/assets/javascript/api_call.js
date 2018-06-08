$(function() {

let input = $("#search").toUpper().val().trim();


//=====================================
//Functions
//=====================================

  // This function grabs stocks from the database and updates the view
 function getStock(stock) {
    $.ajax({
        datatype: json,
        url: queryURL,
        method: "GET"
    })
        // After the data from the AJAX request comes back
        .then(function (response) {
            console.log(response);           
    
     });
    };

  // This updates the stocks db
  function updateStock(stock) {
    $.ajax({
      method: "PUT",
      url: "/api/stocks",
      data: stock
    })
    .then(function(getStocks) {
        
    });
  };

  // This function deletes a stock when the user clicks the delete button
  function deletestock(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/stocks/" + id
    }).then(getStocks);
  };

    // queryURL = baseURL + '?' + input;
    
    // console.log(queryURL);
    
    
    // // request('url', function(err, res, body) {});
    
    //  request({
    //    url: 'baseURL',
    //    method: 'GET',
    //    data: {
    //      query1: 'input'
    //    }
    //  }, function(err, res, body) {
       
    //  });
    
    //  request.post({
    //     url: '',
    //     data: {},
    //     headers: {}
    //   });
    
        

function apiCall() {

//=======================
//IntrinioRealtime ==> will likely be removed
//=======================

let username = process.env.INTRINIO_API_USERNAME;
let password = process.env.INTRINIO_API_PASSWORD;
let auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

let baseURL = "https://api.intrinio.com/companies?ticker=" + input; //after figuring out below delete from question mark
let baseURL2 = "https://api.intrinio.com/prices?identifier=" + input;
let params = {
    // api params go here
    identifier: input,
    // item: "",
    // start_date: "",
    // end_date: "",

};

let queryURL = baseURL + "?ticker=" + input;
let queryURL2 = baseURL2 + input


let request = https.request({
    method: "GET",
    host: "api.intrinio.com",
    path: "/prices?identifier=" + input,     //figure out then change to queryURL
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
        console.log(company.data[0]);

    });
});

request.end();

 
//====================
//alpha vantage => will likely be used
//====================

    let apiKey = process.env.ALPHA_VANTAGE_API_KEY;
    let alphaVantageAPI = new AlphaVantageAPI(apiKey, 'compact', true);
    
    alphaVantageAPI.getIntradayData(input, '1min')
        .then(intradayData => {
            console.log("Intraday data:");
            console.log(intradayData);
            console.log([input + " " + intradayData[0].Close + " " + intradayData[1].Close]);

        })
        .catch(err => {
            console.error(err);
         });



         queryURL = baseURL + '?' + jQuery.param(params);

console.log(queryURL);


}

 $("#searchstock").on("click", function (event) {
   console.log("searchstocked pressed");

 apiCall()


   }); 
});
