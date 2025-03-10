// const arr = [1,2,3,4,5,6,7,8,9,0];

// function chunk(arr,len){
//     let chunked = [];
//     let i=0;
//     while(i<arr.length){
//         chunked.push(arr.slice(i,i+len));
//         // if(i+=len){
//         //     chunked.push(arr.slice(i,arr.length))
//         // }
//         i+=len;
//     }
//     return chunked;
// }

// console.log(chunk(arr,3));

function abc() {
    console.log(a); // undefined
    var a = 10;
    function def() {
    console.log(a); //undefined
    var a = 15;
    }
    def();
   }
   
   abc();