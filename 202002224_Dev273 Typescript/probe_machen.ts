
// let fullName: string = `Bob Bobbington`;
// let age: number = 37;
// let sentence: string = `Hello, my name is ${ fullName }.I'll be ${ age + 1 } years old next month. Zoiets`;
// console.log(sentence);

// //Nog zo iets

// let list: Array<number> = [1, 2, 3];
// list=[4,5,8];
// console.log(list);

// Declare a tuple type
let x: [string, number];
// Initialize it
// x = ["hello", 10]; // OK
// // Initialize it incorrectly
// //x = [10, "hello"]; // Error want geen string, nummer maar nummer, string (DUH)

// console.log(x[0].substring(2)); // OK
// //console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
// console.log(c);
// if (typeof c === "number") {
//     console.log('its a nambur');
// }
// enum PrintMedia {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
// }

// function getMedia(mediaName: string): PrintMedia {
//     if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
//         return PrintMedia.Magazine;
//     }
//  }

// let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
//console.log('MediaType is: '+mediaType);

// factory is a function interface
// interface Factory<T> {
//     (name: string, age: number): T;

//     //staic property
//     serialNumber: number;

//     //static method
//     printSrial: () => void;
// }

// class Dog {
//     constructor(public name: string, public age: number) { }
// }

// const dogFactory: Factory<Dog> = (name, age) => {
//     return new Dog(name, age);
// }

// // initialising static members

// dogFactory.serialNumber = 1234;
// dogFactory.printSrial = () => console.log(dogFactory.serialNumber);


// //instance of Dog that DogFactory creates
// const myDog = dogFactory("spike", 3);

// //static property that returns 1234
// console.log(dogFactory.serialNumber)

// //static method that prints the serial 1234
// dogFactory.printSrial();
