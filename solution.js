var moveZeros = function (arr) {
  let arrAnswer = []
  let arrZeros = []
  
  for (let i of arr){ 
    if (typeof(i)!= "number" || i !== 0){
      arrAnswer.push(i)
    }
    else {
    arrZeros.push(i)
    }
  }
  
   arrAnswer.push(...arrZeros)
   return arrAnswer
