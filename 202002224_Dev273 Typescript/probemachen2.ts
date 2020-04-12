// factory is a function interface
interface Factory<T> {
    (name: string, age: number): T;

    //staic property
    serialNumber: number;

    //static method
    printSrial: () => void;
}

class Dog {
    constructor(public name: string, public age: number) { }
}

const dogFactory: Factory<Dog> = (name, age) => {
    return new Dog(name, age);
}

// initialising static members

dogFactory.serialNumber = 1234;
dogFactory.printSrial = () => console.log(dogFactory.serialNumber);


//instance of Dog that DogFactory creates
const myDog = dogFactory("spike", 3);

//static property that returns 1234
console.log(dogFactory.serialNumber)

//static method that prints the serial 1234
dogFactory.printSrial();