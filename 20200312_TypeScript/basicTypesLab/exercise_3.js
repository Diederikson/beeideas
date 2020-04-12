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
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
})(Colors || (Colors = {}));
var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        if (typeof (color) === "number") {
            return true; //shortcut the parent class if the function is invoked on the subclass
        }
        this.div.style.backgroundColor = color;
        this.div.innerHTML = "<span style='text-align: center'>YO!</span>";
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
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
elementSets.map(function (elem, index) {
    var colorChangeClass = new numericColor(elem.div);
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    colorChangeClass.changeColor(Colors[Math.floor(Math.random() * 4)]);
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(Colors[getRandomIntInclusive(0, 3)]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
//# sourceMappingURL=exercise_3.js.map