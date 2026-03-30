// JSX stands for JavaScript XML.
// JSX allows us to write HTML in React.
// JSX makes it easier to write and add HTML in React.
import React from 'react';

// Example one using JSX
export const myElement = <h4>I love JSX!</h4>

// Without JSX 
export const myElement2 = React.createElement('h4', {}, 'I do not use JSX!');

// Fragments let you group a list of children without adding extra nodes to the DOM.
export const myElement3 = (
    <>
        <p>I am a paragrath</p>
        <p>I am a paragrath</p>
    </>
);

// Because class is a reserved word in JS you must use className in JSX and it automatically parses it to class for you 
export const myElement4 = <h1 className="myClass">Hello World</h1>;

// Example of class being used to style html using inline CSS
export function StyledCar() {
    const mystyles = { // < Style is stored in an Object
        color: "red",
        fontSize: "20px", // Style properties are written in camelCase so fontSize instead of font-size like regular CSS
        backgroundColor: "lightyellow",
    };
    return (
        <>
            <h4 style={mystyles}>My car</h4>
        </>
    )
}

// JSX expressions
export function MyCar() {
    return (
        <>
            <p>My car</p>
            <p>It has {218 * 1.36} horsepower</p>
        </>
    );
}

// Calling a function
function SavingRate(Sr) {
    return Sr * 0.10;
}

export function MySavings() {
    return (
        <>
            <h4>My Savings rate</h4>
            <p>I save 10% of my £150 income this is {'£' + SavingRate(150)} </p>
        </>
    )
}

// Object properties
export function MyObject() {
    const myobj = {
        name: 'Fiat',
        model: '500',
        color: 'white'
    };
    return (
        <>
            <p>My car is a {myobj.color} {myobj.name} {myobj.model}</p>
        </>
    );
}

// If statements: React supports if statements, but not inside JSX.
// option 1: If statements outide of JSX 
export function Fruits() {
    const x = 5;
    let y = "Apple";
    if (x > 10) {
        y = "Banana";
    }
    return (
        <h1>{y}</h1>
    );
}

// Option 2: Use Ternary expression
export function FruitsT() {
    const x = 10;
    return (
        <h1>{x < 11 ? "Banana" : "Apple"}</h1>
    )
}

// Components
// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
// Display the Car component in the "root" element:
//createRoot(document.getElementById('root')).render(
//  <Car />
//)

// Props, meaning properties, are how components talk to each other. We can send data to other components using props.
// Props are like function arguments in JavaScript and attributes in HTML.
// Numbers and strings are passed as props without curly braces. But if you want to pass a boolean, an array, an object, or a function as a prop, you need to enclose it in curly braces.
// The props are defined in the component as a parameter and can be used inside the component to display dynamic data.
export function Car6(props) {
    return (
        <p>I am a {props.color} Car made in {props.year}!</p>
    );
}

// Referring to components inside other components
export function Car7() {
    return (
        <p>I am a Car!</p>
    );
}

// Using a component inside another component is called composition. You can use composition to your advantage to reuse code between components.
export function Garage() {
    return (
        <>
            <p>Who lives in my Garage?</p>
            <Car7 />
        </>
    );
}

// props children
// In React, you can send the content between the opening and closing tags of a component, to another component.
// This can be accessed in the other component using the props.children property.
export function Son(props) {
    return (
        <div style={{ background: 'lightgreen' }}>
            <h2>Son</h2>
            <div>{props.children}</div>
        </div>
    );
}

export function Daughter(props) {
    const { brand, model } = props;
    return (
        <div style={{ background: 'lightblue' }}>
            <h2>Daughter</h2>
            <div>{props.children}</div>
        </div>
    );
}

export function Parent() {
    return (
        <div>
            <h1>My two Children</h1>
            <Son>
                <p>
                    This was written in the Parent component,
                    but displayed as a part of the Son component
                </p>
            </Son>
            <Daughter>
                <p>
                    This was written in the Parent component,
                    but displayed as a part of the Daughter component
                </p>
            </Daughter>
        </div>
    );
}

// React Events
// React events are written in camelCase syntax:
// onClick instead of onclick.
// React event handlers are written inside curly braces:
// onClick={shoot}  instead of onclick="shoot()".
export function Football() {
    const shoot = () => {
        alert("great shot!");
    }
    return (
        <button onClick={shoot}>Take the shot</button>
    );
}

// Arrow function sending the event object manually
export function Football2() {
    const shoot2 = (a) => {
        alert(a);
        /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
    }
    return (
        <button onClick={(event) => shoot2("Goal!", event)}>Take the shot!</button>
    );
}

// Conditional rendering
function MissedGoal() {
    return <h1>Missed Goal!</h1>
}

function MadeGoal() {
    return <h1>Made Goal!</h1>
}

export function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />
}
// Logical && operator
export function Car_more(props) {
    return (
        <>
            {props.brand && <h1>My car is a {props.brand}</h1>}
        </>
    );
}
// Ternary operator
export function Goal_more_more(props) {
    const isGoal = props.isGoal;
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    );
}


// Lists
export function ListCar() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>My Cars:</h1>
            <ul>
                {cars.map((car) => <li>I am a {car}</li>)}
            </ul>
        </>
    );
}

// Keys in Lists
export function Listcar2() {
    const cars = [
        { id: 1001, brand: 'ford' },
        { id: 1002, brand: 'BMW' },
        { id: 1003, brand: 'Audi' }
    ];
    return (
        <>
            <h1>My Cars:</h1>
            <ul>
                {cars.map((x) => <li key={x.id}>I am a {x.brand}</li>)}
            </ul>
        </>
    )
}

// Using index Array as a Key
export function ListCar3() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>My Cars:</h1>
            <ul>
                {cars.map((car, index) => <li key={index}> I am a {car}</li>)}
            </ul>
        </>
    );
}


// Forms
export function MyForm() {
    return (
        <form>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}

// Taking control of the form with React state
import { useState } from 'react';

export function MyForm2() {
    const [name, setName] = useState(""); // state variable to hold the input.
    // Can add a default vale here-->^^

    // function used to update the above variable.
    function handleChange(e) {
        setName(e.target.value);
    }

    // Set the value of the input field to the state variable and the onChange attribute to handle the change event.
    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <p>Current value: {name}</p>
        </form> // ^ displays the current value ^
    );
}

// Submitting Forms
//import { useState } from 'react';

export function MyForm3() {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

// Text area: In HTML the value of a textarea is the text between the start tag <textarea> and the end tag </textarea>.
export function MyForm4() {
    const [mytxt, setMytxt] = useState("");

    function handleChange(e) {
        setMytxt(e.target.value);
    }

    return (
        <form>
            <label>Write here:
                <textarea
                    value={mytxt}
                    onChange={handleChange}
                />
            </label>
        </form>
    )
}

// Select
export function MyForm5() {
    const [myCar, setMyCar] = useState("Volvo")

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

// Using useState Hook to manage the input
export function MyForm6() {
    const [inputs, setInputs] = useState({
        firstname: 'John',
        lastname: 'Doe'
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (
        <form>
            <label>First name:
                <input
                    type="text"
                    name="firstname"
                    value={inputs.firstname}
                    onChange={handleChange}
                />
            </label>
            <label>Last name:
                <input
                    type="text"
                    name="lastname"
                    value={inputs.lastname}
                    onChange={handleChange}
                />
            </label>
            <p>Current values: {inputs.firstname} {inputs.lastname}</p>
        </form>
    )
}

// Checkbox
// For checkboxes, use the checked attribute instead of value to control its state.
export function MyForm7() {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        let fillings = '';
        if (inputs.tomato) fillings += 'tomato';
        if (inputs.onion) {
            if (inputs.tomato) fillings += ' and';
            fillings += 'onion';
        }
        if (fillings == '') fillings = 'no fillings';
        alert(`${inputs.firstname} wants a burger with ${fillings}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>My name is:
                <input
                    type="text"
                    name="firstname"
                    value={inputs.firstname}
                    onChange={handleChange}
                />
            </label>

            <p>I want a burger with:</p>
            <label>Onion:
                <input
                    type="checkbox"
                    name="onion"
                    checked={inputs.onion}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

// Radio forms
export function MyForm8() {
    const [selectedFruit, setSelectedFruit] = useState('banana');

    const handleChange = (event) => {
        setSelectedFruit(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`Your favourite fruit is: ${selectedFruit}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Select your favorite fruit:</p>
            <label>
                <input
                    type="radio"
                    name="fruit"
                    value="apple"
                    checked={selectedFruit == 'apple'}
                    onChange={handleChange}
                />
                Apple
            </label>
            <label>
                <input
                    type="radio"
                    name="fruit"
                    value="banana"
                    checked={selectedFruit === 'banana'}
                    onChange={handleChange}
                /> Banana
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="fruit"
                    value="cherry"
                    checked={selectedFruit === 'cherry'}
                    onChange={handleChange}
                /> Cherry
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

// Portals: React Portals provide a way to render HTML outside the parent component's DOM hierarchy
import { createPortal } from 'react-dom';

export function myChild() {
    return createPortal(
        <div>
            Welcome
        </div>,
        document.body
    );
}

// Creating a Modal with portal
// React Portals are particularly useful for components like modals, tooltips, and dialogs that need to break out of their container's layout.
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px'
            }}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body
    );
}

export function MyApp1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h1>My App</h1>
            <button onClick={() => setIsOpen(true)}>
                Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Modal Content</h2>
                <p>This content is rendered outside the App component!</p>
            </Modal>
        </div>
    );
}


// event bubbling in portals
// Even though a portal renders content in a different part of the DOM tree,
// events from the portal content still bubble up through the React component tree as if the portal wasn't there.
function PortalButton({ onClick, children }) {
  return createPortal(
    <button 
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        background: 'blue',
        color: 'white'
      }}>
      {children}
    </button>,
    document.body
  );
}

export function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid black',
        margin: '20px'
      }}
      onClick={() => {
        setCount1(c => c + 1);
      }}>
      <h2>Div Clicked: {count1}</h2>
      <h2>Button Clicked: {count2}</h2>      
      <p>The floating button is rendered outside this box using a portal,
          but its clicks still bubble up to this parent div!</p>
      <p>Try to click the div element as well, to see the count increase</p>
      
      <PortalButton
        onClick={(e) => {
          // This runs first
          setCount2(c => c + 1);
        }}>
        Floating Button
      </PortalButton>
    </div>
  );
}