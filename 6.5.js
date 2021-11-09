
const array1 = Array(100).fill(4)
console.log(array1);

let array2 = Array.from(Array(100).keys())

let albume= ['lion', 'cat', 'dog', 'bird'];
let convert= Object.values(albume);
let convertKeys= Object.keys(albume);
console.log(albume);
const pets= Object.assign({}, ['lion', 'cat', 'dog', 'bird']);
console.log(pets);

Array.isArray(array2);
const array3=['lop', 'fog'];
const copy1 = array3.slice();
console.log(copy1)
const copyWithSpread = [...array2] ;
console.log(copyWithSpread);
