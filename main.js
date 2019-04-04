
console.log('main.js working');


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       let response = JSON.parse(xhttp.responseText);
       console.log(response.performers);
    }
};
xhttp.open("GET", "performers.json", true);
xhttp.send();


//console.log(require.main === module);


/*
var person = {
    name: "Brad",
    age: 35,
    address:  {
        street: "5 happy st",
        city: "Boston"
    },
    children: ["hehe", "haha"]
}
var people = [
    {
        name: "Brad",
        age: 35
    },
    {
        name: "John",
        age: 40
    },
    {
        name: "Sara",
        age: "25"
    }
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].age);
}


//person = JSON.stringify(person);
//console.log(people[0].age);
//person = JSON.parse(person);
//person = JSON.parse(person);
//console.log(person);
*/


//var ActiveCampaign = require("activecampaign");

//var ac = new ActiveCampaign("clients.json");