let johnTeam= (89+120+103)/3; //104
let mikeTeam= (116+94+123)/3; //111
let maryTeam= (97+134+105)/3; //112

    function winner(){

    if (johnTeam > mikeTeam){
        console.log ('john team is the winner with score of' + " "+ johnTeam);
    }else if (johnTeam < mikeTeam){

     console.log ('mike team is the winner with score of' + " "+ mikeTeam);
    } else {
        console.log ('both of the team are the winners with score of' + " " + mikeTeam+ johnTeam);
    }

    }
    
    console.log(winner());

    function winnerSecondGame(){

        if (johnTeam > mikeTeam && johnTeam > maryTeam){
            console.log ('john team is the winner with score of' + " "+ johnTeam);
        }else if (mikeTeam > johnTeam && mikeTeam > maryTeam){
         console.log ('mike team is the winner with score of' + " "+ mikeTeam);
        } else if (maryTeam >johnTeam && maryTeam >mikeTeam){
            console.log ('mary team is the winner with score of' + " " + maryTeam);
        } else {
            console.log('there is a tie between the teams')
        }
    }
        console.log(winnerSecondGame());