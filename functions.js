// // variable ..// functoin
// const square = function(x){return x * x;};
// console.log(square(12));
// example
// const sum = function (a,b) {
//     return a + b;
// };
// console.log (sum(30,40));
 //***** */
//  const makeNoise = function(){
//      console.log("pling");
//  };
//  makeNoise();
//...Exponential & base,exponent
// const power = function(base ,exponent){
//     let result = 1
//     for ( let count = 0; count < exponent; count++){
//         result*=base;}
//         return result;
// }; console.log (power(2,10));
 
//*** */
// let x  = 10
// if (true){
//     let y = 20; var z= 30;
//     console.log (x+y+z);
// }

//.....Nested scope...(function)..//
// const hummus = function(factor){
//     const ingredient = function(amount,unit, name){
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1){
//             unit +="s";
//         }
    
//     console.log (`${ingredientAmount}${unit}${name}`);
//     }


// ingredient(1,"can","chickpeas");
// ingredient(0.25, "cup","tahini");
// ingredient(0.25, "cup","lemon juice");
// ingredient(1, "clove","garlic");
// ingredient(2,"tablespoon","olive oil");
// ingredient(0.5,"teaspoon","cumin");
// };
// hummus(2)


// Arrow functions//..
// const power =(base,exponent) =>{
//     let result = 1;
//     for (let count = 0; count < exponent; count++){
//         result *=base;
//     }
//     return result;
   
// };
// power()
// console.log(power(2,6));
// Arrow funtion with  one parameter//..
// const square1 = (x) => {return x * x;};
// const square2 =x => x * x;
// console.log( square2(2));

//***call stack....


//....optional arguments...
// function square (x){
//     return x * x;
// }
// square()
// console.log(square( 4,true, "hedgehog"));
 
//..**imdex
// const munaz=[1,2,3,4,5,6,];
// console.log([1,2,3,4,5,6].indexOf(6));
// console.log([1,2,3,4,5,6].lastIndexOf(2))

// ** strings and properties...
// console.log("coconuts".slice(4,7));
// console.log ("coconut".indexOf("u"));

//..**Trim**
console.log("   okay  \n" .trim());
// ***split...
console.log("secretariy","specialize","in","shutup");