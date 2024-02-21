// const prompt = require ("prompt-sync")();

// let num1 =Number(prompt("enter number"));
// let num2 =Number(prompt("enter number"));
function two (b,c){
    if ((b ===c ) && (typeof b === typeof c )&& (b!= null||c!=null)){
        return true;
    }
    else{
       return false;
    }
}
console.log((two(20,50)));