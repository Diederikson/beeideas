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


interface ElementSet {
    'span': Element,
    'div': Element,
    'button': Element
    
}

//cijfers toegevoegd voor de dobbelsteenopdracht
enum Colors {
    Green=1,
    Red=2,
    Blue=3,
    Orange=4,
    Magenta=5,
    Cyan=6
}

class colorChange {
    div: Element;
    constructor(div: Element){
        this.div = div;
    }
    changeColor(color: string) : boolean {
        if (typeof(color) === "number") {
            return true; //shortcut the parent class if the function is invoked on the subclass
        }
        //geintje om de colors van de div uit de vorige opdracht te combineren met
        //de getallen van de dobbelsteen
        (this.div as HTMLElement).style.backgroundColor = color;
        (this.div as HTMLElement).innerHTML=Colors[color];
        return true;
    }
}

class numericColor extends colorChange {
    static Colors = Colors;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
    }
}

let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let elementSets : Array<ElementSet> = [];
let squareSizeNum: number = 100;
let squareSize: string = `${ squareSizeNum }px`;
let Elements = {
    'div': document.createElement('div'),
    'button': document.createElement('button')
}

//Poging om de div en de button onder elkaar in een span te plaatsen
//om vervolgens de span met float horizontaal uit te lijnen.
//probleem daarbij: in de map functie verderop heb je een ongeordende verzameling
//elementen door elkaar die stuk voor stuk (de divs althans) dezelfde prperties krijgen
//als je genest zitten in span kan je niet meer een willekeurige span pakken
//want daar horen welbepaalde div en button bij
//[!] eem idee is om de map misschien niet te gebruiken maar de 4 (slechts 4) divs
//[!] en hun bijbehorende childrens aan te kleden en "met de hand" toe te voegen aan
//[!] de DOM
for (let index: number = 0; index < 4; index++) {
    var span=document.createElement('span');
    var div=document.createElement('div');
    var button=document.createElement('button');
    span.appendChild(div);
    span.appendChild(button);
    console.log()

//oorspronkelijke functie om de divs en buttons aan een array toe te voegen (moet dat wel?)
    for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

//goed (met uitbreiding voor tekst in de div. Groot, vet en in het midden).
//[!] en de div float. Misschien niet hier doen!
elementSets.map( (elem, index) => {
    let colorChangeClass = new numericColor(elem.div);
    
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    (elem.div as HTMLElement).style.textAlign='center';
    (elem.div as HTMLElement).style.verticalAlign='middle';
    (elem.div as HTMLElement).style.lineHeight='100px';
    (elem.div as HTMLElement).style.fontSize='40px';
    (elem.div as HTMLElement).style.fontStyle='bold';
    (elem.div as HTMLElement).style.float='left';
    colorChangeClass.changeColor(Colors[Math.floor(Math.random() * 4)]);
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[getRandomIntInclusive(1, 6)]);
    }
    // een poging om de spam sub-tree samen te stellen. Misschien niet in de map functie
    document.body.appendChild(elem.span);
    document.getElementById("span").appendChild(elem.div);
    document.getElementById("span").appendChild(elem.button);
    
})
*/ 
//# sourceMappingURL=rolldice.js.map