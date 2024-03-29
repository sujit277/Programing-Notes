// Arguments - 
//    Arguments are the values that are passed to the function during 
//    function call.


/* JavScript Support two types of Arguments */


// 1. Ordered Arguments -- 
//    These are the arguments passed to the function in a defined order
//    According to function defination.
     

function display(name, age) {
  console.log("Name: " + name);
  console.log("Age: " + age);
}

display("Sujit", 25);

// 2. Default Arguments --
//    These are the arguments that has a default value if programmer does not pass
//    value for that field then default value of the field will be used.

function display(name, age = 21) {
  console.log("Name: " + name);
  console.log("Age: " + age);
}

display("Sujit", 25);
display("Anjali");
