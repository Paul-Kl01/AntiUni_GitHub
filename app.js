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
}

// Objekt erstellen
let jul = new Person("julian", 0);
let han = new Person("hannah", 0);
let lea = new Person("lea", 0);
let pau = new Person("paul", 0);

let punkte = 0;

// Punkte hinzufügen
function addJulian() {
    punkte = parseInt(document.getElementById("julian").value);
    if (document.getElementById("julian").value != "") {
        jul.score = jul.score + punkte;
        document.getElementById("jPunkte").innerHTML = jul.score;
        document.getElementById("julian").value = "";
        console.log(jul.getName(),":", punkte);
    }
}

function addHannah() {
    punkte = parseInt(document.getElementById("hannah").value);
    if (document.getElementById("hannah").value != "") {
        han.score = han.score + punkte;
        document.getElementById("hPunkte").innerHTML = han.score;
        document.getElementById("hannah").value = "";
        console.log(han.getName(),":", punkte);
    }
}

function addLea() {
    punkte = parseInt(document.getElementById("lea").value);
    if (document.getElementById("lea").value != "") {
        lea.score = lea.score + punkte;
        document.getElementById("lPunkte").innerHTML = lea.score;
        document.getElementById("lea").value = "";
        console.log(lea.getName(),":", punkte);
    }
}

function addPaul() {
    punkte = parseInt(document.getElementById("paul").value);
    if (document.getElementById("paul").value != "") {
        pau.score = pau.score + punkte;
        document.getElementById("pPunkte").innerHTML = pau.score;
        document.getElementById("paul").value = "";
        console.log(pau.getName(),":", punkte);
    }
}

// Punkte aktualisieren
function aktualisiere() {
    document.getElementById("jPunkte").innerHTML = jul.getPunkte();
    document.getElementById("hPunkte").innerHTML = han.getPunkte();
    document.getElementById("lPunkte").innerHTML = lea.getPunkte();
    document.getElementById("pPunkte").innerHTML = pau.getPunkte();
}

// Rangliste sortieren
let rangliste = [jul.score];
console.log(rangliste);
function sort() {

}

