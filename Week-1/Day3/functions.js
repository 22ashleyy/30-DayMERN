//functions are a bunch of blocks of things that are repeated in the code

function printme() {
  console.log('printingg...');
}

printme();

function printThis(param){
  console.log(param);
}
printThis('tapas');

const printMe = function() { 
  console.log('print');
};

const printMeAgainWithParam = function(a,b){
  console.log(a, b)
}
printmeAgainWithParam(10, 20);

function x(){
  console.log('print');
}
let p = x(); //undefined

function y(a, b){
  return(a + b);
}

let s = y(); //addition

//DEFAULT PARAMETERS
function sum( a, b=0){
  let math = (2* (a+b));
  return math;
}

//REST PARAMETERS allows function to receive any number of arguements.
//Function can have have ONE rest parameter.
//Rest arameters only return arrays.
function restParameters(...numbers){
  console.log(numbers);
}

restParameters(1, 2, 3);

//ARROW FUNCTION
const add = function(a,b) {
  return a+ b;
}
const addNumbers = (a,b) => {
    return a + b ;
};

//NESTED FUNCTION
function outer(){
  console.log('outer');
  function inner() {
    console.log('inner');
  }
  inner();
}

//CALLBACK FUNCTION
function foo(bar){
  bar();
}
foo(function() {
  console.log('bar');
});

//PURE FUNCTIONS
function sayGreeting(name){
  console.log(`hello ${name}`)
}
sayGreeting('Ashleys')