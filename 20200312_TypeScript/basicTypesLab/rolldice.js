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
//Cijfers toegevoegd voor de dobbelsteenopdracht
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
        //uitbreiding om de colors van de div uit de vorige opdracht te combineren met 
        //de getallen van de dobbelsteen
        this.div.style.backgroundColor = color; //kleur
        this.div.innerHTML = Colors[color]; // Getal dat hoort bij de kleur
        return true;
    };
    return colorChange;
}());
var numericColor = /** @class */ (function (_super) {
    __extends(numericColor, _super);
    function numericColor(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        return _this;
    }
}
//De extensie laat ik even zitten. Kijk bij Tutorial Lab03 DEV273x Introduction to TypeScript 2
//To Create An Overloaded Method als je dit nog wilt oefenen.
// Ze halen me teveel overhoop 
class numericColor extends colorChange {
    constructor(div) {
        super(div);
    }
}
numericColor.Colors = Colors;
//Random generator voor de kleuren
let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let elementSets = [];
let squareSizeNum = 100;
let squareSize = `${squareSizeNum}px`;
//let Elements = {
let bigButton = document.createElement('button');
//oorspronkelijke functie om de divs en buttons aan een array toe te voegen. 
for (let index = 0; index < 4; index++) {
    elementSets.push({
        'span': document.createElement('span'),
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
// takeaways voor deze uitbreiding:
// map is een operatie op de elementen van de/het array. De elementen worden in volgorde (van toevoeging aan het array)
// gemuteerd volgens de lijst met operaties in de functie. Kennelijk is het een soort geneste iteratie
// ik heb span als element toegevoegd aan de iteratie en in de fo-loop hierboven meegenomen in de creatie. Naar mijn idee
// heb je dan een verzameling DOM-elementen od althans referenties. De structurering doe ik hier beneden door div en button to te voegen aan 
// span met appendChild. Ze worden dan genest opgenomen, zoals ook blijkt uit de gegenereerde HTML (F12)
//-
elementSets.map((elem, index) => {
    let colorChangeClass = new numericColor(elem.div);
    elem.span.appendChild(elem.div);
    elem.span.appendChild(elem.button);
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.div.style.textAlign = 'center';
    elem.div.style.verticalAlign = 'middle';
    elem.div.style.lineHeight = '100px';
    elem.div.style.fontSize = '40px';
    elem.div.style.fontStyle = 'bold';
    elem.span.style.float = 'left';
    colorChangeClass.changeColor(Colors[Math.floor(Math.random() * 4)]);
    elem.button.textContent = "Change Color";
    elem.button.onclick = (event) => {
        colorChangeClass.changeColor(Colors[getRandomIntInclusive(1, 6)]);
    };
    //dit is dus geen append aan de Document (DOM) maar specifiek aan de bodytag/
    document.body.appendChild(elem.span);
});
//big button is toegevoegd. Moet nog actie aan toewijzen. Doen we later
bigButton.style.width = squareSize;
bigButton.style.height = squareSize;
bigButton.textContent = "ROLLDICE";
document.body.appendChild(bigButton);
//hoe het array eruit ziet
console.log(elementSets[1]);
//# sourceMappingURL=rolldice.js.map