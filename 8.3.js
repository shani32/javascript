const book1={
    name: 'neomi',
    author: 'neomi shemer',
    year: 1988
};
const book2={
    name: 'david',
    author: 'moshe gal',
    year: 1958
}
const bookUtils = {
getPublishedFirst (book1, book2){
    return Math.min(book1.year, book2.year)

},
setNewYear(){
    return book1.name= book1.secondName;
},
setNewEdition(){
    return book1.year= book1.editionYear;
},

setLanguage : function (x) {
    book1.language2 = x;
    return book1;
},

isSameAuthor : function (book1, book2) {
    return book1.author === book2.author;
}
};


console.log(bookUtils.setLanguage('english'));
console.log(bookUtils.setTranslation(book1));

