function countryToLiveIn(language, isIsland, population, country){
    if (language ==='english' &&  population < 50 && isIsland===false || isIsland===true) {
        return `you should live in' ${country}`
    } else{
        return `${country} does not meet your critiria`
    }
}

console.log(countryToLiveIn('english', false, 20, 'finland'))
