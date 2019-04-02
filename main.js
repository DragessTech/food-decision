var fastFood = [
  "McDonalds",
  "Burger King",
  "KFC",
  "Wendys",
  "Chic fil A",
  "Arbys",
  "Taco bell",
  "Starbucks",
  "Subway",
  "Carl Jr/Hardee",
  "In and Out",
  "Chipotle",
  "Sonic Drive-In",
  "Jack in the Box",
  "Dairy Queen"
];

var foodType = [
	"African",
	"American",
	"Breakfast",
	"Burgers",
	"Caribbean",
	"Chinese",
	"French",
	"Indian",
	"Italian",
	"Japanese",
	"Korean",
	"Mediterranean",
	"Mexican",
	"Pizza",
	"Sandwiches",
	"Seafood",
	"Spanish",
	"Vegan",
	"Vegetarian",
	"Vietnamese",
	"Thai",
];

fastFood.sort();
foodType.sort();

var randomAnswer = fastFood[Math.floor(Math.random() * fastFood.length)];
var randomType = foodType[Math.floor(Math.random() * foodType.length)];

//console.log(randomAnswer)
//console.log(randomType)