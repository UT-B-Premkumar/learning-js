// ********************* Promises ********************* 




// const data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const name = "Premkumar";
//     name ? resolve(name) : reject("No data");
//   }, 1000);
// });


// Call Promise using then Method

// data
//   .then((name) => {
//     const nameList = [
//       {
//         name: "Premkumar",
//         age: 30,
//       },
//       {
//         name: "pumar",
//         age: 38,
//       },
//       {
//         name: "pk",
//         age: 39,
//       },
//     ];
//     console.log(nameList.find(user => user.name === name).age);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally((names) => {
//     console.log("Finaly");
//   });


//   call Promise using async await 



//  async function process (){
//     try {
//         const names = await data;
//         console.log(names);
        
    
//     } catch (error) {
        
//         console.log(error);
        
//     }
//     finally{
//         console.log("finally");
        
//     }
// }

// process ()


// ********************* Promises end ********************* 


// *********************************************
// ********************* Closure ********************* 
// *********************************************


// function outer() {
//     let value = "premkumar"; // Enclosed variable
//     console.log("running");
    
//     function inner() {
//         console.log(value); // Accesses the 'value' variable from 'outer' scope
//     }
//     return inner; // Returns the 'inner' function
// }

// const variable = outer(); // Calls 'outer' and assigns the returned function to 'variable'
// variable(); // Executes the returned 'inner' function




// ********************* Closure end ********************* 

//******************** array and their methods  ********************
const city = ["chennai" , "madurai" , "kovai" , "theni" , "cbe" , "erode"]

// Length
// console.log(city.length);
// console.log(city[1]);

// console.log(city[city.length -3]);

// Push 
// city.push("kadalore")
// pop 
// city.pop()

// shift 
// city.shift()

// unshift 

// city.unshift("kadalore")


// splice 

// city.splice(0,1)  //its remove 1st value
// city.splice(0,1 , "pondy")  //its replace value  1st index
// city.splice(0,0, "pondy" , "chhh")  //its add value  1st index


// slice 
// console.log(city.splice(0,1));


// reverse 

// console.log(city.reverse());

// Join

// let str = city.join(" ")

// split 

// let str = "prem,kumar, vs, ps, ss"

// const arr = str.split(",")


// concat 
























//********************  array and their methods end  ********************















