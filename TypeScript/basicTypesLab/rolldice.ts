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
[X] Opschonen
[X] Herbouwen 
*/

//Template/Structuur voor Array van elementen
interface ElementSet {
    'span': Element,
    'div': Element,
    'button': Element    
}

//Cijfers toegevoegd voor de dobbelsteenopdracht
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
        //uitbreiding om de colors van de div uit de vorige opdracht te combineren met 
        //de getallen van de dobbelsteen
        (this.div as HTMLElement).style.backgroundColor = color; //kleur
        (this.div as HTMLElement).innerHTML=Colors[color]; // Getal dat hoort bij de kleur
        return true;
    }
}

//De extensie laat ik even zitten. Kijk bij Tutorial Lab03 DEV273x Introduction to TypeScript 2
//To Create An Overloaded Method als je dit nog wilt oefenen.
// Ze halen me teveel overhoop 
class numericColor extends colorChange {
    static Colors = Colors;
    constructor(div: Element) {
        super(div);
    }
}

//Random generator voor de kleuren
let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let elementSets : Array<ElementSet> = [];
let squareSizeNum: number = 100;
let squareSize: string = `${ squareSizeNum }px`;
//let Elements = {
let bigButton=document.createElement('button');

//oorspronkelijke functie om de divs en buttons aan een array toe te voegen. 
    for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'span': document.createElement('span'),   
        'div': document.createElement('div'),
        'button': document.createElement('button')         
    })
}

// takeaways voor deze uitbreiding:
// map is een operatie op de elementen van de/het array. De elementen worden in volgorde (van toevoeging aan het array)
// gemuteerd volgens de lijst met operaties in de functie. Kennelijk is het een soort geneste iteratie
// ik heb span als element toegevoegd aan de iteratie en in de fo-loop hierboven meegenomen in de creatie. Naar mijn idee
// heb je dan een verzameling DOM-elementen od althans referenties. De structurering doe ik hier beneden door div en button to te voegen aan 
// span met appendChild. Ze worden dan genest opgenomen, zoals ook blijkt uit de gegenereerde HTML (F12)
//-
elementSets.map( (elem, index) => {
    let colorChangeClass = new numericColor(elem.div);
    (elem.span as HTMLElement).appendChild(elem.div);
    (elem.span as HTMLElement).appendChild(elem.button);
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    (elem.div as HTMLElement).style.textAlign='center';
    (elem.div as HTMLElement).style.verticalAlign='middle';
    (elem.div as HTMLElement).style.lineHeight='100px';
    (elem.div as HTMLElement).style.fontSize='40px';
    (elem.div as HTMLElement).style.fontStyle='bold';
    (elem.span as HTMLElement).style.float='left';
    colorChangeClass.changeColor(Colors[Math.floor(Math.random() * 4)]);
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[getRandomIntInclusive(1, 6)]);
    }
    //dit is dus geen append aan de Document (DOM) maar specifiek aan de bodytag/
    document.body.appendChild(elem.span);    
})

//big button is toegevoegd. Moet nog actie aan toewijzen. Doen we later
bigButton.style.width = squareSize;
bigButton.style.height = squareSize;
bigButton.textContent="ROLLDICE";
document.body.appendChild(bigButton);

//hoe het array eruit ziet
console.log(elementSets[1])