// Arrays//
// let joshArr =[2,3,6,34,546,656];
// console.log(joshArr[0]);


//for loops//
// let joshArr = ["Bmw","Benz","Tesla","pourche","Lambogini"]; 

// for (i =0; i < joshArr.length; i++ ) {
//     console.log (joshArr[i]);

    
// }
// let janhArr =[2,3,6,34,546,656];
// maxNo =[0];
// minNo =[1000];

// for (i =0; i < janhArr.length; i++) {
// if ( janhArr [i]> maxNo){
//     maxNo = janhArr[i];
// }
// if  (janhArr[i] < minNo){
//     minNo =janhArr[i];
//     }
// }

// console.log(maxNo);
// console.log(minNo);



// let i = 9
// while(i > 0){
//     console.log(i);
//     i =i-2;
// }

// let n =0;
// let x =0;
// while (n <5){
//     n++;
//     x +=n;
//     console.log(x)
// }

// let number =1;
// let sum = 0;

// while(number  <=10){
//     sum += number;
//     number +=1;
//     console.log("the sum is : "+ sum);
// }


// let number =2;
// let sum = 0;

// while(number  <=10){
//     sum += number;
//     number +=+2;
//     console.log("the sum is : "+ sum);

// }

///Do while///
// let i = 0;
// do{
//     i += 1;
//     console.log(i);

// }while(i<5);

// let number = 5;
// do{
//     console.log ("this will be at least once, even though the condition is false.");

// }while (number<5);


// let i = 9;
// do{
//     i--;
//     console.log (i);

// }
// while (i >0);

///for loops///
// for (let i= 1; i<5;i++){
//     console.log(i);
// }

// for (let i= 2; i<5;i+=2){
//     console.log(i);
// }

// ...Arrays...
// let number = [1,2,3,4,5,6,];
// const numbers=[2,3,4,5,,6];
// let =  fruits =["orange","mango","aple",];
// const food =["rice","beans","yam","meat","fish"];

// number [4] = "whatsup" 

// const foothballTeams = [];
// foothballTeams[0] = "Arsenal";
// foothballTeams[1] = "Man utd";
// foothballTeams[2] = "Man city";
// foothballTeams[3] = "Real madrid";
// foothballTeams[4] = "Astana";
// foothballTeams[5] = "chelsea";
// console.log(foothballTeams);

// //....JavaScript arrays are not fixed in size...
// let nobleGases =['H']




// //.....multidiensional Arrays
// let fruits =[["coconut","Palm kernel","wallnut","tugernut"],["orange","tangerine","line"]]
// //          [   0|        1             2          3          0          1             2]
// // ... class work

// let School = [["ksu","unilag","lasu","ful"],["futmina","uniabuja","fedpoly"],["salem","convenant","landmark" ]]
// ..        [0         1      2      3       0         1           2          0       1             2]

// console.log (School)


// push to the End

// School.push(["cmll","old boys"])
// console.log(School);


//....shift.remove..fr0m the first.
// School.shift(["ksu",])
// console.log(School)

//.....pop....removing from the back
// School.pop(["landmark","landmark"])
// console.log(School);

///.....printing from arrays using loops....
// Myname = [1,2,3,4,5,6]
// for (i =0; i<Myname.length;i++){
//     console.log(Myname[i])
// }
// mymoney = [90,3000,800000,1200,50000,68000]
// for (i =0; i<mymoney.length;i++){
//     console.log(mymoney[i])
// }
///.....morning warm up class work...//
// let money = [20,40,50,60]
// // money.push([500,800])
// money.pop([60,50,])
// console.log(money);

//How to join two  or more arrays..//
// const a =[1,2];
// const b =[3,4];
// const c = a.concat(b);
// console.log(c);
  

//Or spread operator...//
// const a =[1,2];
// const b =[3,4];
// const c =[...a,...b];
// console.log(c);

// //To find a specific...
// number[1,2,3,4,5];
// number.find(Element,index,Array => {
//     return true 
//     else false;
// }