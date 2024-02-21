function countBs(string){
    let count = 0;
    for (let i = 0; i <string.length; 1++){
        if (string [i]===`B`){
            count ++;
        }
    }
    return count;
}console.log (countBs);