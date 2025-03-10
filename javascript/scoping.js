function testScoping() { 
    var x = 1; 
    let y = 2; 
    const z = 3; 
    var a=10;
    if (true) { 
    var x = 100; 
    let y = 200; 
    const z = 300; 
    console.log(x, y, z, a); // Output for A 100,200,300,10
    } 
    if (true) { 
    var x = 1000; 
    let y = 300; 
    const z = 600; 
    let a =100;
    console.log(x, y, z, a); // Output for B // 1000 300 600 100
    } 
    console.log(x, y, z, a); // Output for C // 1000 2 3 10
   }
   testScoping();
   


   
   const arr = [-12, -11, 10, -9, -4, -8, 2, 5, 3];
    const sortedArr = arr.sort((a,b)=>{
        if(a > 0 && b>0 ) return a > b ? -1 : 1;
        else return a > b ? 1 : -1;
    })   
    console.log(arr);
   //output = [-12, -11, -9, -8, -4, 10, 5, 3, 2]

   for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i*10);
   }