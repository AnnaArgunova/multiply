module.exports = function multiply(first, second) {
  let varFirst = first.split('').reverse();
  let varSecond = second.split('').reverse();
 
  let arr = [];
 
  for(let i = 0; i < varFirst.length; i++){
    for(let k = 0; k < varSecond.length; k++){
      let temp = varFirst[i] * varSecond[k];
      arr[i+k] = (arr[i + k]) ? arr[i + k] + temp : temp;
 
    }
  }
 
  for(let i = 0; i < arr.length; i++){
    let temp = arr[i] % 10;
    let moveUp = Math.floor(arr[i] / 10);
    arr[i] = temp;
 
    if(arr[i +1])
      arr[i + 1] += moveUp;
       else if(moveUp != 0) 
         arr[i + 1] = moveUp;
       
 
  }
  let result = arr.reverse().join('');
  return result;
 }
 
 

