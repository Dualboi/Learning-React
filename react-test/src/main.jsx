import { createRoot } from 'react-dom/client'
import React, { useState } from 'react';
import message from './message.jsx';
import * as learnJSX from './learnJSX.jsx';
import './style.css';

const myelement = (
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
    return this.present() + ' and it is a ' + this.model
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
function MyList() {
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
let { firstName, lastName, age } = person;

// Destructuring in useState Hook
function Counter() {
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

const mycars = { ...cars, ...car_more }

function mapping_the_output() {
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
const ages = 30;
const message2 = `${name} is ${ages} years old.`

createRoot(document.getElementById('root')).render(
  <div>
    {myelement}
    <div>{mycar.show()}</div>
    <div>{hello(val)}</div>
    <div>X equals {x}</div>
    <div>Y equals {y}</div>
    <div>Z equals {z}</div>
    <div>{doubled.join(', ')}</div>
    {MyList()}
    <div>You can now access each variable separately:</div>
    <div>{truck}</div>
    <div>with destructuring</div>
    <div>{truck2}</div>
    <div>The year is {year}</div>
    <div>{firstName} {lastName} {age} years old</div>
    <Counter />
    {mapping_the_output()}
    <div>{message()}</div>
    <div>{message2}</div>
    <h1>Part two: Learning JSX</h1>
    <div>{myelement}</div>
    <div>{learnJSX.myElement2}</div>
    {learnJSX.myElement3}
    {learnJSX.myElement4}
    <learnJSX.MyCar />
    <learnJSX.MySavings />
    <learnJSX.MyObject />
    <learnJSX.StyledCar />
    <learnJSX.Fruits />
    <learnJSX.FruitsT />
    <learnJSX.Car6 color="red" />
    <learnJSX.Car6 year={2021} />
    <learnJSX.Car7 />
    <learnJSX.Garage />
    <learnJSX.Parent />
    <learnJSX.Football />
    <learnJSX.Football2 />
    <learnJSX.Goal isGoal={false} />
    <learnJSX.Car_more brand="Ford" />
    <learnJSX.Goal_more_more isGoal={false} />
    <h1>This uses basic Mapping to display</h1>
    <learnJSX.ListCar />
    <h1>This uses a created key to display</h1>
    <learnJSX.Listcar2 />
    <h1>This uses the index to display</h1>
    <learnJSX.ListCar3 />
    <learnJSX.MyForm />
    <h1>using react useState and a Hook</h1>
    <learnJSX.MyForm2 />
    <h1>using a submit button</h1>
    <learnJSX.MyForm3 />
    <h1>Using textarea</h1>
    <learnJSX.MyForm4 />
    <learnJSX.MyForm5 />
    <learnJSX.MyForm6 />
    <learnJSX.MyForm7 />
    <learnJSX.MyForm8 />
    <learnJSX.myChild />
    <learnJSX.MyApp1 />
    <learnJSX.App />
    <learnJSX.App2 />
    <learnJSX.Header />
    <div className="header3">
      <learnJSX.Header3 />
    </div>
    <learnJSX.Car />
    <learnJSX.ModuleApp />
    <learnJSX.AppGlobal />
    <learnJSX.App3/>
    <learnJSX.App4/>
    <learnJSX.App5/>
    <learnJSX.App7/>
    <learnJSX.NestedApp/>
    <learnJSX.App8/>
    <learnJSX.URLApp/>
  </div>
)