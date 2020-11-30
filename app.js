/*
ToDo:
1. Nutzer erstellen -> addScore() anpassen für dynamische Nutzer
2. Rangliste ausgeben, sortieren
*/

// Personen Klasse
class Person {
    constructor(name, score) {
        this.name = name;
        this.score = score;

        //Nuzter Ausgabe??
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

    addUser() {
        /*let user = document.getElementById("user").value;
        user = new Person(user, 0);
        user.name = document.getElementById("user").value;
        user.score = 0;
        console.log(user);
        document.getElementById("user").value = "";*/

        // Nutzer ausgeben
        document.getElementById("punkteliste").innerHTML +=
        `<p> ${this.name} ( ${this.score} ) </p> <input type="number" id="${this.name}">`;
    } 

    sort(){}
}

// Nutzer erstellen
let jul = new Person("julian", 0);
let han = new Person("hannah", 0);
let lea = new Person("lea", 0);
let pau = new Person("paul", 0);

function createUser() {
    let user = document.getElementById("user").value;
    user = new Person(user, 0);
    user.name = document.getElementById("user").value;
    user.score = 0;
    console.log(user);
    user.addUser();
    document.getElementById("user").value = "";
}

// Rangliste sortieren
function sort() {
    let user = [jul, han, lea, pau];
    let list = document.getElementById("rangliste");
    list.innerHTML = "";
    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < user.length - i - 1; j++) {
            if (user[j].getPunkte() > user[j+1].getPunkte()) {
                let temp = user[j];
                user[j] = user[j+1];
                user[j + 1] = temp;
            }
        }
    }
    for (let k = user.length - 1; k >= 0; k--) {
        document.getElementById("rangliste").innerHTML +=
        `<li>${user[k].getName()} ( ${user[k].getPunkte()} )</li>`;
    }
}

// Punkte hinzufügen
function add() {
    if (document.getElementById("julian").value != "") {
        jul.addScore();
    } if (document.getElementById("hannah").value != "") {
        han.addScore();
    } if (document.getElementById("lea").value != "") {
        lea.addScore();
    } if (document.getElementById("paul").value != "") {
        pau.addScore();
    }
    
    sort();
}

// Punkte reset
function reset() {
    document.getElementById("julianP").innerHTML = jul.getPunkte();
    document.getElementById("hannahP").innerHTML = han.getPunkte();
    document.getElementById("leaP").innerHTML = lea.getPunkte();
    document.getElementById("paulP").innerHTML = pau.getPunkte();
}
