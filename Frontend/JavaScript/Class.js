// Types of Programming Language
// 1. Object Oriented Programming Language -  C++, Java, C#
// 2. Functional Programming Language - JavaScript, Scala
// 3. Procedural Oriented Programming Language - C

// Class - It is a blueprint for creating objects consisting of data members , methods and
// objects.

//Class in JavaScript
class Emp {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log("Name" + this.name);
    console.log("Age" + this.age);
  }
}

const e1 = new Emp("Sujit", 22);
e1.display();

//Inheritence in JavaScript
class Emp {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
  }
}
class Clerk extends Emp {
  constructor(name, age, salary, designation) {
    super(name, age);
    this.salary = salary;
    this.designation = designation;
  }
  displayAll() {
    super.display();
    console.log("Salary: " + this.salary);
    console.log("Designation: " + this.designation);
  }
}

const c1 = new Clerk("Raju", 25, 10000, "Clerk");
const c2 = new Clerk("Prakash", 33, 8000, "Clerk");
c1.displayAll();
c2.displayAll();


// Note--
// JavaScript cannot have more than one constructor in the same class.

