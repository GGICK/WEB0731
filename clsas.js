// function Point(x, y) {
//   let pt = Object.create(Point.methods);
//   pt.x = x;
//   pt.y = y;
//   return pt;
// }

// Point.methods = {
//   toString: function () {
//     return `(${this.x},${this.y})`;
//   },
// };
// let pt1 = Point(10, 20);
// let pt2 = Point(100, 200);

// console.log(pt1.toString());
// console.log(pt2.toString());

// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function () {
//     return Math.PI * this.radius ** 2;
//   };
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }

//   Person.prototype.sayHi = function () {
//     console.log("hi " + this.name);
//   };
//   Person.sayHello = function () {
//     console.log("hello!");
//   };
//   return Person;
// })();

// const me = new Person("Lee");
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

// class Person2 {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }

//   static sayHello() {
//     console.log("Hello!");
//   }
// }
// const me2 = new Person2("Park");
// me2.sayHi();
// Person2.sayHello();

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }

//   static area2(width, height) {
//     return width * height;
//   }
// }

// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.area2(20, 20));

// const person = {
//   firstName: "Minji",
//   lastName: "Choi",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split("");
//   },
// };

// console.log(`${person.firstName}${person.lastName}`);
// console.log(person.fullName);

// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name;
//     this.wheel = wheel;
//   }
// }
// const myVehicle = new Vehicle("운송수단", 2);
// console.log(myVehicle);

// class Bicyle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel);
//   }
// }
// const myBicycle = new Bicyle("따릉이", 2);
// const kidsBichcle = new Bicyle("세발", 3);
// console.log(myBicycle);
// console.log(kidsBichcle);

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel);
//     this.license = license;
//   }
// }
// const myCar = new Car("벤츠", 4, true);
// const wifeCar = new Car("포르쉐", 4, false);

// console.log(myCar);
// console.log(wifeCar);

// class Base {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     return `Hi! ${this.name}. how are you doing?`;
//   }
// }

// class Derived extends Base {
//   sayHi() {
//     return `${super.sayHi()}`;
//   }
// }
// const derived = new Derived("Lee");
// console.log(derived.sayHi());

// function Book(title, author, price, page) {
//   this.title = title;
//   this.author = author;
//   this.price = price;
//   this.page = page;
// }

// Book.prototype.page = function () {
//   console.log(`"총 페이지는" + ${this.page} + "입니다."`);
// };

// const Zerocho = new Book("제로초의 자바스크립트", "조현영", 32000, 780);
// console.log(Zerocho);
// Book.page();
