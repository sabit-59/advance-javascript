const students = [

   {id:21, name:'sabit'},
   {id:31, name:'rabit'},
   {id:41, name:'mabit'},
   {id:51, name:'tabit'}


]

const result = students.map(function(element){
    const outPut =[];
    for (let i = 0; i < students.length; i++) {
        const element = students[i];

        const newResult = element.name ;
      outPut. push(newResult);
        return newResult;
        
    }
})
console.log(result);

const names = students.map(s => s.name);
const ids = students.map(y => y.id);

const big = students.find(s =>s.id>33 );
// const bigOne = students.filter(s => s.id > 33);

// console.log(names);
// console.log(ids);

console.log(big);
const bigger = students.filter(s => s.id>40);
console.log(bigger);