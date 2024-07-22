console.log("this is tutorial 53");

function greet(name, greetText = "Greetings from JavaScript"){
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy ");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
}


let name = "Gautam";
let name1 = "Hariom";
let name2 = "vijendra";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2);

// let returnval = greet(name2);
// console.log(returnval);


let returnval = sum(1,2,3);
console.log(returnval)


// console.log(name + " is a good boy ")
// console.log(name1 + " is a good boy ")
// console.log(name2 + " is a good girl ")

