function describeCountry(country, population, capitalCity){
    console.log(`${country} has ${population} people and it's capital city is ${capitalCity}`);
}
console.log (describeCountry('finland', '6 million', 'helsinky'));
console.log (describeCountry('israel', '8 million', 'jerusalem'));
console.log (describeCountry('new zealand', '5 million', 'okland'));


let finland= describeCountry('finland', '6 million', 'helsinky');
console.log(finland);
let israel= describeCountry('israel', '8 million', 'jerusalem');
console.log(israel);
let newzealand= describeCountry('new zealand', '5 million', 'okland');
console.log(newzealand);