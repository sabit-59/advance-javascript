const numbers =[3,4,5,6,7,8]
//  const outPut =[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//      const result = element*element;
//      outPut.push(result);
// }

// function squre(element){
//     return element*element;
// }

//  const result = numbers.map(squre)

// const squre = x=> x*x
    
// const result = numbers.map(x=>x*x);

const bigger = numbers.filter(x => x>5)
const isThere = numbers.find(x => x>5)


console.log(isThere);