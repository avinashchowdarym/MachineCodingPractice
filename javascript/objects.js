let person1 = {
    name: 'ravi',
    age:21
}
let person2 = {
  name: "ram",
  age:43
}
person1=Object.freeze(person1)
person2 = Object.seal(person2)

person1.age=31
person2.age = 53

person1.location = 'US'
person2.location = 'UK'

console.log(person1.location,person1.age) // error , 21
console.log(person2.location,person2.age)   // error,53

// freeze -- 

// The Object.freeze() method prevents any changes to an object.

// The Object.freeze() method will fail silently in non-strict mode.

// The Object.freeze() method will throw a TypeError in strict mode.

// Frozen objects are read-only. No modification, addition or deletion of properties are allowed.

// The Object.isFrozen() method can be used to check if an object is frozen.

// seal object 

// The Object.seal() method prevents additions or deletions of new properties.

// The Object.seal() method makes existing properties non-configurable.

// The Object.seal() method will fail silently in non-strict mode.

// The Object.seal() method will throw a TypeError in strict mode.

// The Object.isSealed() method can be used to check if an object is sealed.






  function sayHi() {
    return (() => 0)();
  }
  
  console.log(typeof sayHi());

  const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

{
    function display() {
      var a = (b = 10);
      //b=10;
      // var a = b;
    }
    display();
    console.log(typeof b === "undefined");
    console.log(typeof a === "undefined");
  }
  