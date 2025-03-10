// promise is a placeeholder which will be filled with value

// Promise is an object representing the eventual completion or failure of asynchronous operation

// const URL = 'https://www.youtube.com/watch?v=ap-6PPAuK1Y';

// const promise = fetch(URL);

// promise.then((data)=>{
//    return console.log(data);
// })

// async await 

 const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('avinash1')
    },1000);
 });

 const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('avinash2');
    },5000)
 })

 const p3 = new Promise((resolve,reject)=>{
    resolve('avinash3');
 })

 const handlePromise = async () => {
    console.log('hello world');


    console.log('first promise');
    const val1 = await p1;
    console.log(val1);

    console.log('second promise');
    const val2 = await p2;
    console.log(val2);

    console.log('third promise');
    const val3 = await p3;
    console.log(val3);
 }
 handlePromise();