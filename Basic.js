let names = ["swapnil", "tejas", "shreeyash", "keshav","Nishant"];

/*

// find the name which does not contain W
names.map(ele => ele.toLocaleUpperCase()).
    filter(num => !num.match('W')).
    forEach(num => console.log(num))
*/

/*

// convert each charecter into uppercase 
names.forEach(n => console.log(n.charAt(0).toUpperCase() + n.substring(1)))

*/

/*
// use map to print each number
names.map( n => console.log(n));

*/

/*

// filter the name which start with latter A

names.filter(n =>   n.toLowerCase().startsWith('s')).forEach(n => console.log(n))
*/



let person = {
    pName :"swapnil",
    pAge : 24,
    city :"chalisgaon" ,

    education : {          
        colledgeName :"NYNC",
        marks : 9.14
    }
}

console.log(`person name : ${person.city}`)