// Array.prototype.customFilter = function(cb){
//     let arrRes = [];
//     for(let i=0;i<this.length;i++){
//        if(cb(this[i],i,this)) arrRes.push(this[i]);
//     }
//     return arrRes;
// }

// let arr = [1,2,3,4,5];

// console.log(arr.customFilter(n => n>2));

// this does not work in arrow functions 

// console.log(arr.filter(n=> n>2));

// const Memoize = (fn) => {
//     let res = {}; // 
//     return function(...args){
//         let keys = JSON.stringify(args);
//         if(!res[keys]){
//             res[keys] = fn(...args);
//             console.log('function called')
//             return res[keys];
//         }
//         else{
//             console.log('cache returned')
//             return res[keys];
//         }
//     }
// }

// let sum = (a,b) => {
//     return a+b;
// }

// console.log(Memoize(sum)(1,2)); 

// api1

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },1000)
// });

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(2)
//     },1000)
// });

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(3)
//     },1000)
// });

// let promises = [promise1,promise2,promise3];

// const series =  (promises) => {
//     try{
        
//     }catch{

//     }
// }

// network requests

// securities

// webpack bundlers how does it identify perofamances
function sum(a,b,c){
    return a+b+c;
}

function memoize(fn) {
    // write your solution here
    let cache = {};
    return (...args)=> {
      const key = JSON.stringify(args);
      if(key in cache){
        console.log('cache ')
        return cache[key];
      }
      else{
        const result = fn.apply(this, args);
        console.log('function called')
        cache[key] = result;
        return result;
      }
    }
}
const memoizedSum = memoize(sum); 

console.log(memoizedSum(1,2,3));
console.log(memoizedSum(1,2,3));

