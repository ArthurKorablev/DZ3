let age = prompt("What year were you born?");
let yaer = new Date();

age = !age ? "Sorry you did not type youre age" : `Your age is ${yaer.getFullYear() - age.trim()}`;

let city = prompt("What city do you live in?");
if (!city) alert("Sorry you did not type your city");
city = !city ? "(not specifitd)" : city.toLowerCase();

let sport = prompt("What's your favorite kind of sport? Box, football or tenis");
if (!sport) alert("Sorry you did not type your sport");
sport = !sport ? "(not specifitd)" : sport.toLowerCase();


if (city != "" && city == "london") {
    city = "You live in the capital of Great Britian";
} else if (city == "kyiv") {
    city = "You live in the capital of Ukraine";
} else if (city == "washington") {
    city = "You live in the capital of the USA";
} else {
    city = `You live in ${city}`;
}


if (sport.toLowerCase() == 'box') {
    sport = "Great! Do you wanna be as Usik";
} else if (sport.toLowerCase() == 'football') {
    sport = "Great! Do you wanna be as Messi";
} else if (sport.toLowerCase() == 'tenis') {
    sport = "Great! Do you wanna be as Nadal";
} else {
    sport = `Great! You like ${sport}`;
}


if (age == yaer.getFullYear()) {
    alert(`${city}. ${sport}`);
} else if (city == "You live in (not specifitd)") {
    alert(`${age}. ${sport}`);
} else if (sport == "Great! You like (not specifitd)") {
   alert(`${age}. ${city}`); 
} else {
    alert(`${age}. ${city}. ${sport}`);
}