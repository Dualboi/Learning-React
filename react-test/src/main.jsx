import { createRoot } from 'react-dom/client'
import React, { useState } from 'react';
import message from './message.jsx';
import {myElement} from './learnJSX.jsx';
import {myElement2} from './learnJSX.jsx';
import {myElement3} from './learnJSX.jsx';
import {myElement4} from './learnJSX.jsx';
import {MyCar} from './learnJSX.jsx';
import {MySavings} from './learnJSX.jsx';
import {MyObject} from './learnJSX.jsx';
import {StyledCar} from './learnJSX.jsx';
import {Fruits} from './learnJSX.jsx';
import {FruitsT} from './learnJSX.jsx';
import {Car6} from './learnJSX.jsx';
import {Car7} from './learnJSX.jsx';
import {Garage} from './learnJSX.jsx';
import {Parent} from './learnJSX.jsx';
import {Football} from './learnJSX.jsx';
import {Football2} from './learnJSX.jsx';
import {Goal} from './learnJSX.jsx';
import {Car_more} from './learnJSX.jsx';
import {Goal_more_more} from './learnJSX.jsx';
import {ListCar} from './learnJSX.jsx';
import {Listcar2} from './learnJSX.jsx';
import {ListCar3} from './learnJSX.jsx';
import {MyForm} from './learnJSX.jsx';
import {MyForm2} from './learnJSX.jsx';
import {MyForm3} from './learnJSX.jsx';
import {MyForm4} from './learnJSX.jsx';

const myelement =  (
  <table>
    <tbody>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
    </tbody>
  </table>
)

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present()+' and it is a '+ this.model
  }
}

const mycar = new Model("Ford", "Mustang")

const val = " I'm a value :)"
const hello = val => "Hello World!" + val;

// var has a function scope, not a block scope.
var x = 5.6;

// let is the block scoped version of var,
// and is limited to the block (or expression) where it is defined.
// If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.
let y = 5.6;

// const is also block scoped, but the value of a const variable cannot be changed through reassignment, and it can't be redeclared.
// similar to the final statement in Java. However, if the const variable holds an object, the properties of that object can be changed.
const z = 5.6;

// Map function
// method creates a new array with the results of calling a function for every array element.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);

const fruitlist = ["apple", "banana", "cherry"];
function MyList(){
  return (
    <ul>
      {fruitlist.map(fruit =>
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  )
}

// Destructuring assignment
// Note: Destructuring makes React code cleaner and more readable by reducing repetitive object and array access.
// Destructuring is a JavaScript feature that allows you to extract values from objects or arrays into distinct variables. 
// In React, it's commonly used with props, hooks, and state management.

// old way
const vehicle = ['mustang', 'f-150', 'expedition'];
const car = vehicle[0];
const truck = vehicle[1];
const suv = vehicle[3];

// now with destructuring
const vehicles2 = ['mustang', 'f-150', 'expedition'];
// When destructuring arrays, the order that variables are declared is important.
const [car2, truck2, suv2] = vehicles2;

// Destructuring comes in handy when a function returns an array:
function dateInfo(dat) {
  const d = dat.getDate();
  const m = dat.getMonth();
  const y = dat.getFullYear();

  return [d, m, y];
}
const [date, month, year] = dateInfo(new Date())

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, age} = person;

// Destructuring in useState Hook
function Counter(){
  // Destructuring the array returned by useState
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}

// Spread operator ...
const cars = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const car_more = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const mycars = {...cars, ...car_more}

function mapping_the_output(){
  return (
    <ul>
      {Object.entries(mycars).map(([key, value]) => 
        <li key={key}>{key}: {value}</li>
      )}
    </ul>
  )
}

// Template Strings you can use any expression inside a template string by wrapping it in curly braces ${expression}.
// Enclused using backticks ``, not single or double quotes.
// indentation and line breaks are preserved in template strings, which can make your code more readable.
const name = "john";
const ages =30;
const message2 = `${name} is ${ages} years old.`

createRoot(document.getElementById('root')).render(
  <div>
  {myelement}
  <p>{mycar.show()}</p>
  <p>{hello(val)}</p>
  <p>X equals {x}</p>
  <p>Y equals {y}</p>
  <p>Z equals {z}</p>
  <p>{doubled.join(', ')}</p>
  {MyList()}
  <p>You can now access each variable separately:</p>
  <p>{truck}</p>
  <p>with destructuring</p>
  <p>{truck2}</p>
  <p>The year is {year}</p>
  <p>{firstName} {lastName} {age} years old</p>
  <Counter/>
  {mapping_the_output()}
  <p>{message()}</p>
  <p>{message2}</p>
  <h1>Part two: Learning JSX</h1>
  <p>{myElement}</p>
  <p>{myElement2}</p>
  {myElement3}
  {myElement4}
  <MyCar/>
  <MySavings/>
  <MyObject/>
  <StyledCar/>
  <Fruits/>
  <FruitsT/>
  <Car6 color="red"/>
  <Car6 year={2021}/>
  <Car7/>
  <Garage/>
  <Parent/>
  <Football/>
  <Football2/>
  <Goal isGoal={false}/>
  <Car_more brand="Ford"/>
  <Goal_more_more isGoal={false}/>
  <h1>This uses basic Mapping to display</h1>
  <ListCar/>
  <h1>This uses a created key to display</h1>
  <Listcar2/>
  <h1>This uses the index to display</h1>
  <ListCar3/>
  <MyForm/>
  <h1>using react useState and a Hook</h1>
  <MyForm2/>
  <h1>using a submit button</h1>
  <MyForm3/>
  <h1>Using textarea</h1>
  <MyForm4/>
  </div>
)