// two sum 

const arr = [1,2,3,4,5,6]; // )(logn)

function twosum(arr , target){
    let resarr = [] 
    const mapped = new Set(); // O(1) 
    for(let i=0;i<arr.length;i++){
        if(mapped.has(target - arr[i])){
            resarr.push([arr[i],target-arr[i]]);
        }
        mapped.add(arr[i]); //O(1)
    }
    return resarr; // O(n)
}

console.log(twosum(arr,7));
