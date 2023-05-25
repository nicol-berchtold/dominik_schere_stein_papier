"use strict";

function computerPlay() {
    let zufall = Math.floor(Math.random() * 3);
    let hand = ''
    if (zufall === 0) {
        hand = "schere";
    } else if (zufall === 1) {
        hand = "stein";
    } else {
        hand = "papier";
    }
    return hand;
}
function init() {
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissor = document.getElementById('scissor');
    //let ausgabe = document.getElementById('ausgabe');



    rock.onclick = function () {
        playRound('stein');
        //ausgabe.innerHTML = "Sie haben Stein gewählt!";
    }

    paper.onclick = function () {
        playRound('papier');
        //ausgabe.innerHTML = "Sie haben Papier gewählt!";
    }

    scissor.onclick = function () {
        playRound('schere');
        //ausgabe.innerHTML = "Sie haben Schere gewählt!";
    }

}
function playRound(pChoice) {
    let ausgabe = document.getElementById('ausgabe')

    const playerSelection = pChoice;
    const computerSelect = computerPlay();

    if (playerSelection === "stein" && computerSelect === "schere") {
        ausgabe.innerHTML = "Stein Schleift Schere! Stein gewinnt!";
        countPoints(1);
    } else if (playerSelection === "stein" && computerSelect === "papier") {
        ausgabe.innerHTML = "Papier umwickelt Stein! Papier gewinnt!";
        countPoints(2);
    } else if (playerSelection === "stein" && computerSelect === "stein") {
        ausgabe.innerHTML = "Es ist ein unentschieden!";
    } else if (playerSelection === "schere" && computerSelect === "papier") {
        ausgabe.innerHTML = "Schere schneiet Papier! Papier gewinnt!";
        countPoints(1);
    } else if (playerSelection === "schere" && computerSelect === "stein") {
        ausgabe.innerHTML = "Stein schleift Schere! Stein gewinnt!";
        countPoints(2);
    } else if (playerSelection === "schere" && computerSelect === "schere") {
        ausgabe.innerHTML = "Es ist ein unentschieden!";
    } else if (playerSelection === "papier" && computerSelect === "stein") {
        ausgabe.innerHTML = "Papier umwickelt Stein! Papier gewinnt!";
        countPoints(1);
    } else if (playerSelection === "papier" && computerSelect === "schere") {
        ausgabe.innerHTML = "Schere schneidet Papier! Schere gewinnt";
        countPoints(2);
    } else if (playerSelection === "papier" && computerSelect === "papier") {
        ausgabe.innerHTML = "Es ist ein unentschieden!";
    }

    return (countPoints)
}

let playerPunkte = 0;
let computerPunkte = 0;
let playerPunkteElement = document.getElementById('playerPunkte');
let computerPunkteElement = document.getElementById('computerPunkte');

function countPoints(punkt) {

    let ausgabe = document.getElementById('ausgabe');

    //const punkt = playRound(playerPunkte);
    if (punkt === 1) {
        playerPunkte += 1
        playerPunkteElement.textContent = playerPunkte;
        ausgabe.style.backgroundColor = "green";
    } else if (punkt === 2) {
        computerPunkte += 1;
        computerPunkteElement.textContent = computerPunkte;
        ausgabe.style.backgroundColor = "red";
    }


    if (playerPunkte >= 3) {
        ausgabe.innerHTML = "Der Spieler hat gewonnen";
        
    } else if (computerPunkte >= 3) {
        ausgabe.innerHTML = "Computer hat gewonnen";
        
    }
}

let clear = document.getElementById('clear');

clear.onclick = function clear() {
    playerPunkte = 0;
    playerPunkteElement.textContent = "";
    computerPunkteElement.textContent = "";
    computerPunkte = 0;
    ausgabe.innerHTML = "";
}
init()