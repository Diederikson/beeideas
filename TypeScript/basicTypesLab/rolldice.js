var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        if (typeof (color) === "number") {
            return true; //shortcut the parent class if the function is invoked on the subclass
        }
        //geintje om de colors van de div uit de vorige opdracht te combineren met 
        //de getallen van de dobbelsteen
        this.div.style.backgroundColor = color;
        this.div.innerHTML = Colors[color];
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
    numericColor.Colors = Colors;
    return numericColor;
}(colorChange));
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var elementSets = [];
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
var Elements = {
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
//for (let index: number = 0; index < 4; index++) {
//   var span=document.createElement('span');
//   var div=document.createElement('div');
//   var button=document.createElement('button');    
//   span.appendChild(div);
//   span.appendChild(button);
//   console.log()
//oorspronkelijke functie om de divs en buttons aan een array toe te voegen (moet dat wel?) 
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button'),
    });
}
//goed (met uitbreiding voor tekst in de div. Groot, vet en in het midden).
//[!] en de div float. Misschien niet hier doen! 
elementSets.map(function (elem, index) {
    var colorChangeClass = new numericColor(elem.div);
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
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(Colors[getRandomIntInclusive(1, 6)]);
    };
    // een poging om de spam sub-tree samen te stellen. Misschien niet in de map functie
    //document.body.appendChild(elem.span);
    //document.getElementById("span").appendChild(elem.div);
    //document.getElementById("span").appendChild(elem.button);
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
console.log("ttetetttet");
//# sourceMappingURL=rolldice.js.map