let age = prompt("What year were you born?");
let yaer = new Date;
let city = prompt("What city do you live in?");
let sport = prompt("What's your favorite kind of sport? Box, football or tenis");

age = `Your age is ${yaer.getFullYear() - age}`;

//console.log(city);
city == null ? "" : city.toLowerCase(); 

if (city == "london") {
    city = "You live in the capital of Great Britian";
} else if (city == "kyiv") {
    city = "You live in the capital of Ukraine";
} else if (city == "washington") {
    city = "You live in the capital of the USA";
} else {
    city = `You live in ${city}`;
}


if (sport.toLowerCase() == 'box' || sport.toLowerCase() == 'бокс') {
    sport = "Great! Do you wanna be as Usik";
} else if (sport.toLowerCase() == 'football' || sport.toLowerCase() == 'футбол') {
    sport = "Great! Do you wanna be as Messi";
} else if (sport.toLowerCase() == 'tenis' || sport.toLowerCase() == 'тенис') {
    sport = "Great! Do you wanna be as Nadal";
} else {
    sport = `Great! You like ${sport}`;
}

console.log(age, city, sport);

if (age == null) {
    alert("Sorry you did not type your age");
} else if (age && city == null && sport) {
    alert("Sorry you did not type your city");
} else if (sport == null) {
    alert("Sorry you did not type your favorite city");
} else {
    alert(`${age}. ${city}. ${sport}`);
}