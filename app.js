// Personen Klasse
class Person {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    getPunkte() {
        return this.score;
    }

    getName() {
        return this.name;
    }

    addScore() {
        let punkte = 0;
        punkte = parseInt(document.getElementById(this.name).value);
        if (document.getElementById(this.name).value != "") {
            this.score = this.score + punkte;
            document.getElementById(this.name + "P").innerHTML = this.score;
            document.getElementById(this.name).value = "";
            console.log(this.getName(),":", punkte);
        }
    }
}

// Nutzer erstellen
let jul = new Person("julian", 0);
let han = new Person("hannah", 0);
let lea = new Person("lea", 0);
let pau = new Person("paul", 0);

// Punkte hinzufügen
function add() {
    if (document.getElementById("julian").value != "") {
        jul.addScore();
    } else if (document.getElementById("hannah").value != "") {
        han.addScore();
    } else if (document.getElementById("lea").value != "") {
        lea.addScore();
    } else {
        pau.addScore();
    }
}

// Punkte reset
function reset() {
    document.getElementById("julianP").innerHTML = jul.getPunkte();
    document.getElementById("hannahP").innerHTML = han.getPunkte();
    document.getElementById("leaP").innerHTML = lea.getPunkte();
    document.getElementById("paulP").innerHTML = pau.getPunkte();
}

// Rangliste sortieren
/*
let rangliste = [jul.score];
console.log(rangliste);
function sort() {

}
*/
