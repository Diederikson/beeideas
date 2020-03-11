interface ElementSet {
    'div': Element,
    'button': Element
}

class colorChange {
    div: Element;
    constructor(div: Element){
        this.div = div;
    }
    changeColor(color: string) : boolean {
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}
enum Colors {
    Green,
    Red,
    Blue,
    Orange
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
    let colorChangeClass = new colorChange(elem.div);
    
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    colorChangeClass.changeColor(Colors[Math.floor(Math.random() * 4)]);
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})


