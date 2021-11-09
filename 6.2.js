const people = ['greg', 'mary', 'devon', 'james'];

for(someone of people){
    console.log(someone)
};

const remove1= people.shift();
console.log(people);

const remove2= people.pop();
console.log (people);

people.unshift('matt');
console.log (people);

people.push('shani');
console.log (people);

const copy= people.slice();
const wow= people.slice(2,3);
console.log(wow)

const index= people.indexOf('mary');
console.log(index);

const foo= people.indexOf('foo');
console.log(foo);

people.splice(2,1);
people.splice(2,0, 'elizabeth', 'artie');

let withBob = ['BoB']
console.log(people.concat(withBob));

