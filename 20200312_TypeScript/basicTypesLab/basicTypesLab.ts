let color: string = "green";
let squareSizeNum: number = 100;
let squareSize: string = `${ squareSizeNum }px`;
let button: Element = document.createElement('button');
let div: Element = document.createElement('div');
let colorChange: Function = (elem: Element, color: string) : boolean => {
    (elem as HTMLElement).style.backgroundColor = color; //upcast elem
    return true;
}
button.textContent = "Change Color";
document.body.appendChild(button);
document.body.appendChild(div);
(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;

(button as HTMLElement).onclick = (event) => {
    colorChange(div, color);
}


