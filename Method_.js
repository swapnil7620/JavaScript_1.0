
/* Method and Function are same in js*/
/* Object having a property  but it and a behaviour is called method*/


// let Laptop = {
//     "cpu": "i7",
//     "RAM":"12",
//     "Brand":"hp",
//      "Buy" : function(){
//         console.log("Now you cannot Buy a Laptop😠");
//         console.log("OK 😢")
//     } 
// }

 //Laptop.Buy();
// console.log(Result);


let Laptop1 = {
    "cpu": "i8",
    "RAM":"12",
    "Brand":"hp",
     getConfig : function(){
        // console.log(Laptop1.cpu)//instant of  laptop use this keyword
        console.log(this.cpu);
        
    } 
}

let Laptop = {
    "cpu": "i7",
    "RAM":"12",
    "Brand":"hp",
     getConfig : function(){
        // console.log(laptop.cpu)//instant of  laptop use this keyword
        console.log(this.cpu)
        
    } 
}
Laptop.getConfig();
Laptop1.getConfig();

