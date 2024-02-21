function bigSmall(array){
    let smallest = array[0];
    let largest = array[0];

    for(let i= 1; i<array.length;i++){
        if (array[i] < smallest ){
            smallest = array[i];
        }
        if(array[i] > largest){
            largest = array[i];
        }
    }
        return {smallest,largest};
    
}
 const numbers = [2,7,9,8];
  const result = bigSmall(numbers);
 console.log(result);