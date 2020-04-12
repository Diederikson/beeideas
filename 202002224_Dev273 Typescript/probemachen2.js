var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    return Dog;
}());
var dogFactory = function (name, age) {
    return new Dog(name, age);
};
// initialising static members
dogFactory.serialNumber = 1234;
dogFactory.printSrial = function () { return console.log(dogFactory.serialNumber); };
//instance of Dog that DogFactory creates
var myDog = dogFactory("spike", 3);
//static property that returns 1234
console.log(dogFactory.serialNumber);
//static method that prints the serial 1234
dogFactory.printSrial();
//# sourceMappingURL=probemachen2.js.map