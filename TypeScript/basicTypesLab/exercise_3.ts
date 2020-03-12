interface ElementSet {
    'div': Element,
    'button': Element
}
enum Colors {
    Green,
    Red,
    Blue,
    Orange
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
        (this.div as HTMLElement).style.backgroundColor = color;
        (this.div as HTMLElement).innerHTML="<span style='text-align: center'>YO!</span>";
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

for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

elementSets.map( (elem, index) => {
    let colorChangeClass = new numericColor(elem.div);
    
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    colorChangeClass.changeColor(Colors[Math.floor(Math.random() * 4)]);
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[getRandomIntInclusive(0, 3)]);
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})


