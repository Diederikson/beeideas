/*
(aanwijzingen uit de opgave)
- use Array, number, string, Boolean.
- use enum to declare the dice numbers
- use a class to create a die, including css properties (length, width, border, color) and the value in the die
- Create an interface to describe your die's types.

Extend the class with a dieRoller class to create a method for rolling the die.

Create a function to instantiate dice using the dieRoller class, binding elements using the constructor() function.

Create a button to roll all the dice at once.

Aanpak voor nu: kopieren van de code van exercise 3, en dan  aanpassen waar nodig.
20200312|2219|DJO
[X] Annoteren
[_] Opschonen
[_] Herbouwen
*/
//cijfers toegevoegd voor de dobbelsteenopdracht
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Red"] = 2] = "Red";
    Colors[Colors["Blue"] = 3] = "Blue";
    Colors[Colors["Orange"] = 4] = "Orange";
    Colors[Colors["Magenta"] = 5] = "Magenta";
    Colors[Colors["Cyan"] = 6] = "Cyan";
})(Colors || (Colors = {}));
class colorChange {
    constructor(div) {
        this.div = div;
    }
    changeColor(color) {
        if (typeof (color) === "number") {
            return true; //shortcut the parent class if the function is invoked on the subclass
        }
        //geintje om de colors van de div uit de vorige opdracht te combineren met 
        //de getallen van de dobbelsteen
        this.div.style.backgroundColor = color;
        this.div.innerHTML = Colors[color];
        return true;
    }
}
class numericColor extends colorChange {
    constructor(div) {
        super(div);
        this.div.style.width = squareSize;
        this.div.style.height = squareSize;
    }
}
numericColor.Colors = Colors;
let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let elementSets = [];
let squareSizeNum = 100;
let squareSize = `${squareSizeNum}px`;
let Elements = {
    'div': document.createElement('div'),
    'button': document.createElement('button')
};
//Poging om de div en de button onder elkaar in een span te plaatsen 
//om vervolgens de span met float horizontaal uit te lijnen.
//probleem daarbij: in de map functie verderop heb je een ongeordende verzameling 
//elementen door elkaar die stuk voor stuk (de divs althans) dezelfde prperties krijgen
//als je genest zitten in span kan je niet meer een willekeurige span pakken 
//want daar horen welbepaalde div en button bij
//[!] eem idee is om de map misschien niet te gebruiken maar de 4 (slechts 4) divs 
//[!] en hun bijbehorende childrens aan te kleden en "met de hand" toe te voegen aan
//[!] de DOM
for (let index = 0; index < 4; index++) {
    var span = document.createElement('span');
    var div = document.createElement('div');
    var button = document.createElement('button');
    span.appendChild(div);
    span.appendChild(button);
    console.log();
    //oorspronkelijke functie om de divs en buttons aan een array toe te voegen (moet dat wel?) 
    for (let index = 0; index < 4; index++) {
        elementSets.push({
            'div': document.createElement('div'),
            'button': document.createElement('button'),
            'span': document.createElement('span')
        });
    }
    //goed (met uitbreiding voor tekst in de div. Groot, vet en in het midden).
    //[!] en de div float. Misschien niet hier doen! 
    elementSets.map((elem, index) => {
        let colorChangeClass = new numericColor(elem.div);
        elem.div.style.width = squareSize;
        elem.div.style.height = squareSize;
        elem.div.style.textAlign = 'center';
        elem.div.style.verticalAlign = 'middle';
        elem.div.style.lineHeight = '100px';
        elem.div.style.fontSize = '40px';
        elem.div.style.fontStyle = 'bold';
        elem.div.style.float = 'left';
        colorChangeClass.changeColor(Colors[Math.floor(Math.random() * 4)]);
        elem.button.textContent = "Change Color";
        elem.button.onclick = (event) => {
            colorChangeClass.changeColor(Colors[getRandomIntInclusive(1, 6)]);
        };
        // een poging om de spam sub-tree samen te stellen. Misschien niet in de map functie
        document.body.appendChild(elem.button);
        document.body.appendChild(elem.div);
        //document.body.appendChild(elem.span);
        //document.getElementById("span").appendChild(elem.div);
        //document.getElementById("span").appendChild(elem.button);
    });
}
console.log("yooooo");
//# sourceMappingURL=rolldice.js.map