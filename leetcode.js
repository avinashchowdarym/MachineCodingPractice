// // two sum

// // map and set

// // A Set stores unique values (no duplicates). Order of iteration = insertion order.

// // how to define set

// const s = new Set([1, 2, 2, 3]); // -> {1,2,3}

// // has add size delete

// s.has(1); // true

// s.add(5); // [1,2,3,5]

// s.delete(3) //true and deletes 3 from set

// s.size;

// console.log(s, s.size)

// // const unique = [...new Set(arr)]; // deduplicate of an array


// // Map is a key value pair

// // A Map stores key → value pairs, where keys can be any type (objects, arrays, functions, etc.). Order of iteration = insertion order.

// // set get has size delete

// // create
// const m = new Map([ ['a', 1], ['b', 2] ]);

// // set / get / has / delete / size
// m.set('c', 3);
// m.get('a');     // 1
// m.has('b');     // true
// m.delete('b');  // true
// m.size;         // 2

// // iterate
// // for (const [k, v] of m) console.log(k, v);
// m.forEach((v, k) => console.log(k, v));

// // keys/values/entries
// [...m.keys()];
// [...m.values()];
// [...m.entries()];


// const s = "racecar"
// const t = "carrace"

// console.log([...s].sort().join(''))
// console.log([...t].sort().join(''))
// console.log([...s].sort().join('') === [...t].sort().join(''))

// strs = ["act","pots","tops","cat","stop","hat"]

// const m = new Map();

// for(let i=0;i<strs.length;i++){
//     let anag = [...strs[i]].sort().join('') // important
//     if(m.has(anag)){
//         // console.log(m.get(anag))
//         m.set(anag, [...m.get(anag),strs[i]]);
//     }
//     else m.set(anag,[strs[i]]);
// }

// console.log(Array.from(m.values())) // important

// // console.log(res)

// // Grouping Anagrams 

// // top k frquent elements

// topKFrequent(nums, k) {
//     const m = new Map();
//     for(let i=0;i<nums.length;i++){
//         m.set(nums[i], (m.get(nums[i]) || 0) + 1);
//     }

//     const sorted = [...m.entries()].sort((a,b)=> b[1]-a[1]) // m.entries() and convert to array and sort 

//     return sorted.slice(0,k).map((e)=>e[0])
    
// }

nums=[0,3,2,5,4,6,1,1]

let newArr = [...new Set(nums)].sort((a,b)=>(a-b));

// console.log(newArr);
        let maxSeq = 0;let temp = 1;
        for(let i=1;i<newArr.length;i++){
            // console.log(newArr[i])
            if(newArr[i]===newArr[i-1]+1){
                temp++;
            }
            else{
                console.log(temp,maxSeq)
                maxSeq = Math.max(maxSeq,temp);
                temp = 1;
            }
        }