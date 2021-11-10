const myCountry={
    country : 'new zealand' ,
    capital : 'okland',
    language : 'english',
    population : '6 million',
    neighbours : ['australia' , 'figi'],
    describe : function(){
        console.log(`${this.country} has ${this.population} people, their mother tongue
        is ${this.language}, they have 2 neigbours named ${this.neighbours} and a capital called ${this.capital} `)
    },
    checkIsland : function(){
     this.isIsland= this.neighbours.length ===0 ? true: false; 
    }

    }

    
    
    myCountry.describe();
    myCountry.checkIsland();
    console.log(myCountry.isIsland)
    
    


