// Variables 
/*
console.log("Hello Javascript")
let Num = 10
console.log(Num)
let UserName = 'swapnil ' + Num
console.log(UserName)
Num=20 //reassign is possible with let keyword
console.log(Num)
*/

// Find the area of circle
/*
let radius = 5
//radius = 7
// radius = 18
const pi = 3.14
console.log(pi * radius * radius)
console.log(typeof radius) 
*/

  // Data Types //
  
/*
let UserName = " Swapnil\t \n \"Mahajan\" \n " // using escape character
let Num = 10n
let a = null
let bool = true
let o ={"Name": "Swapnil",
        "LastName": "Mahajan"
       }
let C;
console.log(Num + " " + typeof Num)
console.log(UserName + "type of data is : " + typeof UserName)
console.log(typeof a,typeof bool, typeof o ,typeof C)
console.log(o.Name)
*/

/* Type Conversion  & Type Coercion */

//Explicit conversion

let Num = String(6);
console.log(Num , typeof(Num))
let Pin= Number("1234");
console.log(Pin , typeof(Pin))

let x;
console.log(x, typeof(x));

//coersion:- It's comes into a picture when two different types of data get combine
x = 8 +"";
console.log(x, typeof(x));

//coersion implicitly convert into number again for substraction
x= x-2;
console.log(x, typeof(x));

// it true because its greater than 0 //imp
x = !x;
console.log(x, typeof(x));

//boolean
let y=Boolean(true);
console.log(y, typeof(y));

y = !y;
console.log(y, typeof(y));

//type casting to boolean
//except 0 and Null and Undefined and empty_string with have no space any number ,string ,empty_string which as space is true ;
// let z= Boolean("S");
// let z = Boolean(-1);
// let z = Boolean(null);//false
// let z = Boolean(undefined);//
let z = Boolean("");//false if don't have any space
console.log(z, typeof(z));

// parseInt

//forcely it convert into number //at begining it must have a number

// let Nums = parseInt("123.2 swapnil");
let Nums = parseFloat("123.2 swapnil");
console.log(Nums, typeof Nums);
//date type
console.log(Date());
console.log(getDay());





