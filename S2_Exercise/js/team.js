"use strict";

class Team{
    constructor(teamname){
        this.teamname = '';
        this.trainername = '';
        this.pokemonTeam = [];
    } 
    
    describe() {
        return `${this.teamname}`;
    }
} 

export default Team;

//let team1 = new Team('Toman')