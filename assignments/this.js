/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. console.log(this) will return window object in console. Gives us access to many different properties. The window object is global.
* 2. Implicit binding is when a function is called by a preceeding dot, the object before that dot is 'this'.
* 3. A constructor function is a function that returns a new object. A constructor function is like a blueprint. 
* 4. We can use the methods .call and .apply to explicitly bind. 'this' is being explicilty defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sayYes() {
    console.log(this); // this statement will print window object to console.
    return;
}

// Principle 2
// code example for Implicit Binding

const myObj = {
    'name': 'Marcelo Laos',
    sayName: function(name) {
        console.log(`Hello ${this.name}`); // implicit binding
    }
}

// Principle 3
// code example for New Binding

function sayName(name) {
    this.name = name;
    this.speak = function() {
        console.log(`Hello ${this.name}`);
    }
};

const Marcelo = new sayName('Marcelo'); // New binding

// Principle 4

// code example for Explicit Binding

CharStats.call(this, human); // explicit binding this. Gives us access to CharStats object