//console.log('server is starting.');

var express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening(){
    console.log('listening. . . ');
}

app.use(express.static('public'));

app.get('/search/:name', performer);

function performer(request, response){
    var data = request.params;
    response.send("test " + data.name + " to see if available");

}





var ActiveCampaign = require("activecampaign");

var ac = new ActiveCampaign("clients.json");

// TEST API credentials
ac.credentials_test().then(function(result) {
    // successful request
    if (result.success) {
        // VALID ACCOUNT
    } else {
        // INVALID ACCOUNT
    }
}, function(result) {
    // request error
});

// GET requests

var account_view = ac.api("account/view", {});
account_view.then(function(result) {
    // successful request
    console.log(result);
}, function(result) {
    // request error
});

var contact_exists = ac.api("contact/view?email=test@example.com", {});
contact_exists.then(function(result) {
    // successful request
    console.log(result);
}, function(result) {
    // request error
});

// POST request

var list = {
    name: "List 3",
    sender_name: "My Company",
    sender_addr1: "123 S. Street",
    sender_city: "Chicago",
    sender_zip: "60601",
    sender_country: "USA"
};

var list_add = ac.api("list/add", list);
list_add.then(function(result) {
    // successful request
    console.log(result);
}, function(result) {
    // request error
});