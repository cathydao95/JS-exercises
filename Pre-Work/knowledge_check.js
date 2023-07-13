// Knowledge Check
// This section contains questions for you to check your understanding of this lesson. If you’re having trouble answering the questions below on your own, review the material above to find the answer.

// Write an object constructor and instantiate the object.
function Person(name, age){
this.name = name;
this.age = age;
}

let person1 = new Person("Cathy", 28);
console.log(person1);

//Q:  Describe what a prototype is and how it can be used.
// A: A prototype is an object that is associated with every function and object. 
// It is a blueprint or template that allows objects to inherit properties and methods from it.
// Can add new properties/methods to existing objects.


// Q: Explain prototypal inheritance.
// A: Prototypal inheritance is where objects can inherit properties and methods 
// from other objects. 

// Q: Understand the basic do’s and don’t’s of prototypical inheritance.
// A: DO: Use Object.create(), DON'T: Modify built in prototypes of JS Objects

// Q: Explain what Object.create does.
// A: Object.create() creates a new object which inherits properties/methods
// from the prototype.

// Q: How does this behave in different situations?
// A: The behavior of "this" depends on how a function is called. 
