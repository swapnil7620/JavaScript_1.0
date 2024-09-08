// /* let value = new Array(); // first way of creating an array
// let value = [1,2,5 ,4];//second way of creating array
// value.push(10);
// value[5]=15;
// console.log(value);
//  console.log(value.length);
//  console.log(value.sort());
// console.log(value[4]);

// */
// /*---- Different types of data in arrays------ */

// /*let data = ["swapnil ", 88, {tech:'js'}, one = function(){console.log("hello swapnil")}];
// console.log(data);
// data[3]();
// */

// /*--------methods of an array------*/

// let data = [10,30,20,40,60];
// console.log(data.push(50));
// console.log(data.pop());
// console.log(data.shift());//to remove value from staring 
// console.log(data.unshift(15));//to add value from staring 
// console.log(data.splice(2,1));// to remove perticular values form perticuler index
// console.log(data.splice(2,1, 3,4));// to remove perticular values form perticuler index and we can add some values also
// console.log(data);

/*----for of loop with array------*/

//let data = [10,20,30,40,11,12,14];
// for(let D of data){
//     console.log(D);

// }
// for in loop in array

// for ( let d in data){
//     console.log(d);
//}

// let i = 0;
// while(i < data.length){
//     console.log(data);
//      break;
//     i++;
//} 

// ------------Arrays Destruction--------- //


//  let Nums = [10,20,30, 40, 50];//assign value

//  let [a,b,c,,d,]= Nums;// reassign value
//  console.log(c);
//  console.log(d);


// for swaping two variable and three variable  it is  good option //


// let Number1 = 10;
// let Number2 = 20;
// let Number3 = 30;

// [Number1,Number2,Number3]=[Number3,Number2,Number1];

// console.log(Number1);
// console.log(Number2);
// console.log(Number3);


// let word = "My Name is Swapnil Mahajan  And i am software Developer ".split(' ');

// let [a,b,c,,d,...E] = word;
// console.log(a,b,c,d);
// console.log(E);


///------for each------//

// let Nums = [10,20,30,40,50];

//  Nums.forEach((n) =>{
//      console.log(n*2)

// Nums.forEach((n,i ,Nums) =>{
//     console.log(n,i,Nums);
//});


//-----Array Methods------- 1) filter 2) map 3) reduce 

//let Nums = [5,10,15,20,25,30 ,33];
// console.log( Nums.filter(Nums => Nums%2===0));
//console.log( Nums.filter(Nums => Nums%3===0 && Nums%5===0));

// filter and map
// let Nums = [5, 10, 15, 20, 25, 30, 33];
// Nums.filter(Num => Num % 2 === 0)
//     .map(Num => Num * 2)
//     .forEach(Num => {
//         console.log(Num)

//     });

//filter map reduce in one//

// let Nums = [5, 10, 15, 20, 25, 30, 33];
//  let result =Nums.filter(Num => Num % 2 === 0)
//     .map(Num => Num * 2)
//     .reduce((a,b) => (a+b));
//     console.log(result);

    

/*------set---------*/

// let Nums = new Set([1,2,3,2,3,2,4,5,6,8,]);
// let Nums = new Set("Swapnilll")

// let Nums = new Set();
//  Nums.add(5);
//  Nums.add(15);
//  Nums.add(25);
//  Nums.add(35);

// // Nums.add(10);
//  console.log(Nums);
//  Nums.forEach(N => {
//     console.log(N);
    
//  });

// Nums.add(10);
// Nums.add(20);
// Nums.add(20);
// Nums.add(30);
// Nums.add(40);


/*-----------Map--------*/

// let map = new Map();

// map.set("Swapnil","Java");
// map.set("Nishant","Java");
// map.set("Mihir","React");
// map.set("Harshal","SQL");
// map.set("Harshal","MYSQL");

//  for (let  [k,v] of map){
//      console.log(k + " : "+ v);

//  }

// map.forEach((v,k) =>{
//     console.log( k ,":",v);

// });
