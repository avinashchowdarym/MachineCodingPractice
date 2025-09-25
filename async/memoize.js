function sum(a,b,c){
    return a+b+c;
}

function memoize(func){
    let cache = {};

    return (...args) => {
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key]
        }
        else{
            cache[key] = func.apply(this,args);
            return cache[key];
        }
    }

}

console.log(memoize(sum)(1,2,3));

// memoize for async function 

function memoizeAsync (func){
    let cache = new Map();
    return async function(...args){
        let key = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }
        const promise = func(...args).then((res) =>{
                cache.set(key,Promise.resolve(res));
                return res;
            }
        ).catch((err)=>{
            throw err;
        })

        cache.set(key,promise)
        return promise;
    }
}

const fetchUserID = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`)
    const data = await response.json()
    return data
}

const getUserID = memoizeAsync(fetchUserID);

console.log(getUserID(1).then((data) => console.log(data.firstName)));

console.log(getUserID(2).then((data) => console.log(data.firstName)));

console.log(getUserID(1).then((data) => console.log(data.firstName)));


