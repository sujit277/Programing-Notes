// Overloading --  
// If one or more methods have the same name but they differ in parameters (different number of parameters, 
// different types of parameters, or both) in the same class then These methods are called overloaded 
// methods and this feature is called method overloading.

class Calculator {
  add(a, b) {
    console.log(a + b);
  }
  add(a, b, c) {
    console.log(a + b + c);
  }
  add(a, b, c, d) {
    console.log(a + b + c + d);
  }
}

const c1 = new Calculator();
c1.add(10, 20);
c1.add(10, 20, 30);
c1.add(10, 20, 30, 40);

OUTPUT - NaN;
NaN;
100; 

// Note - 
// JavScript Does not Support Method Overloading Concept because whenever we declare Methods with same name 
// in the same class then on calling Methods on object the last Method will be called everytime without 
// caring about no of arguments

//Constructor Overloading in Javascript 

class Emp{
    constructor(...a){
        if(a[0]== undefined && a[1]==undefined){
            this.name = "Raju";
            this.age = 25;
        }
        else if(a[1]==undefined){
            this.name = a[0];
            this.age = 24;
        }
        else{
            this.name = a[0];
            this.age = a[1];
        }
    }
    display(){
        console.log("Name "+this.name);
        console.log("Age "+this.age);
    }
}

const e1 = new Emp();
const e2 = new Emp("Sujit");
const e3 = new Emp("Anjali",22);

e1.display();
e2.display();
e3.display();


