"use strict";

function computerPlay() {
    let zufall = Math.floor(Math.random() * 3);
    let hand = ''
    if(zufall === 0){
        hand = "schere";
    } else if ( zufall === 1){
        hand = "stein";
    } else {
        hand = "papier";
    }
    return hand;
}
function playRound() {

    let playerSelection = '';
    do {
        //console.log("Falsche Eingabe")
        playerSelection = prompt("Wähle stein, schere oder papier:").toLowerCase();
    } while(!(playerSelection === 'stein') && !(playerSelection === 'schere') && !(playerSelection === 'papier')) 
    
    
    const computerSelect = computerPlay();
    let win = 0
    if(playerSelection === "stein" && computerSelect === "schere") {
        console.log("Spieler gewinnt");
        win = 1;
    } else if (playerSelection === "stein" && computerSelect === "papier") {
        console.log("Computer gewinnt");
        win = 2;
    } else if (playerSelection === "stein" && computerSelect === "stein") {
        console.log("Niemand gewinnt");
        
    } else if (playerSelection === "schere" && computerSelect === "papier") {
        console.log("Spieler gewinnt");
        win = 1;
    } else if (playerSelection === "schere" && computerSelect === "stein") {
        console.log("Computer gewinnt");
        win = 2;
    } else if (playerSelection === "schere" && computerSelect === "schere") {
        console.log("Niemand gewinnt");
        
    } else if (playerSelection === "papier" && computerSelect === "stein") {
        console.log("Spieler gewinnt");
        win = 1;
    } else if (playerSelection === "papier" && computerSelect === "schere") {
        console.log("Computer gewinnt");
        win = 2;
    } else if (playerSelection === "papier" && computerSelect === "papier") {
        console.log("Niemand gewinnt");
    }
 
    return(win)
}


function game() {
    let player = 0;
    let com = 0;
    while (player < 3 && com < 3) {
        const punkt = playRound(player);
        if (punkt === 1) {
            player += 1
        } else if (punkt === 2) {
            com += 1;
        }
    }
    if (player === 3){
        document.write("Der Spieler hat gewonnen");
    } else if ( com === 3) {
        document.write("Computer hat gewonnen");
    }
}

game();