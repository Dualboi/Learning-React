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
                {cars.map((car, index) => <li key={index}>I am a {car}</li>)}
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

// Suspense and lazy loading
// React Suspense lets you display an alternative HTML while waiting for code or data to load.
import { Suspense, lazy } from 'react';
// This now calls a function that returns a promise
const Cars = lazy(() => import('./ListCar3.jsx'));

export function App2() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Cars />
            </Suspense>
        </div>
    );
}

// One Suspense component can wrap multiple lazy components: For instance
// const Header = lazy(() => import('./Header'));
// const Content = lazy(() => import('./Content'));
// const Sidebar = lazy(() => import('./Sidebar'));


// CSS Styling in React
const Header1 = () => {
    return (
        <>
            <h1 style={{ color: "red" }}>Hello Style!</h1>
            <p>Add a little style!</p>
        </>
    );
}

// Since the inline CSS is written in a JavaScript object, 
// properties with hyphen separators, like background-color, 
// must be written with camel case syntax:
const Header2 = () => {
    return (
        <>
            <h1 style={{ backgroundColor: "lightblue" }}>This is styled</h1>
            <p>With background color</p>
        </>
    );
}

// Javascript objects can be used to store the styles and then applied to the elements:
export const Header = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
        <>
            <h1 style={myStyle}>This uses an object to style</h1>
        </>
    )
}

// Using an external stylesheet see main
export const Header3 = () => {
    return (
        <>
            <h1>Hello Style!</h1>
            <p>This is styled using an external stylesheet!</p>
        </>
    );
}

// Using CSS Modules
//import styles from './my-style.module.css'; 

export const Car = () => {
    return <h1 className={styles.bigred}>Hello Car! This is styled using a CSS module!</h1>;
}

// Modules Extended
// An example with two buttons, with different styling:
import buttonStyles from './Button.module.css';

export function ModuleApp() {
    return (
        <div>
            <button className={`${buttonStyles.primary}`}>
                My Primary Button
            </button>
            <button className={`${buttonStyles.secondary}`}>
                My Secondary Button
            </button>
        </div>
    );
}

// Composing Classes
// CSS Modules allow you to combine classes using the composes keyword:
// This now uses composes: mybutton; in the stylesheet to remove the need to use template literals and className in the component. See Button.module.css for example.

// Global CSS
// CSS example :global(.myheader) {}
import styles from './BlueHeader.module.css';

export function AppGlobal() {
    return (
        <div>
            <h1 className="myheader">
                My Header
            </h1>
        </div>
    );
}

// Using CSS in JS
// run npm install styled-components
import styled from 'styled-components';

const MyHeader4 = styled.h1`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
`;

export function App3() {
    return (
        <>
            <MyHeader4>This component uses a styled component</MyHeader4>
        </>
    );
}

// using props in styled components
export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  cursor: pointer;
`;

export function App4() {
    return (
        <div>
            <Button btntype="primary">Primary Button</Button>
            <br />
            <br />
            <Button>Secondary Button</Button>
        </div>
    );
}

// Styled components Global styles
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    color: white;
    background-color: purple;
    font-family: Arial, sans-serif;
    }

    .myparagrath {
    font-family: 'Courier New', Courier, monospace;
    color: blue;
    }
    `;

export function App5() {
    return (
        <>
            <GlobalStyle />
            <h1>This is a global styled header</h1>
            <p className="myparagrath">This is a global styled paragrath</p>
        </>
    );
}

// React Routing
// Your application must be wrapped with the BrowserRouter component to enable routing:
export function App6() {
    return (
        <BrowserRouter>
            {/* Your application components go here */}
        </BrowserRouter>
    );
}

// To demonstrate routing, we'll create three pages (or views) in our application: Home, About, and Contact:
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}

export function App7() {
    return (
        <BrowserRouter>
            {/* Navigation Links */}
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/about">About</Link> | {" "}
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Route Definitions */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

// Nested Routes
// The import above of Outlet is used to specify where to render child nested routes
function Products() {
    return (
        <div>
            <h1>Products Page</h1>
            <nav style={{ marginBottom: '20px' }}>
                {/* Here is the nested routing */}
                <Link to="/products/car">Cars</Link> |{" "}
                <Link to="/products/bike">Bikes</Link>
            </nav>
            <Outlet />
        </div>
    );
}

function CarProducts() {
    return (
        <div>
            <h2>Cars</h2>
            <ul>
                <li>Audi</li>
                <li>BMW</li>
                <li>Volvo</li>
            </ul>
        </div>
    );
}

function BikeProducts() {
    return (
        <div>
            <h2>Bikes</h2>
            <ul>
                <li>Yamaha</li>
                <li>Suzuki</li>
                <li>Honda</li>
            </ul>
        </div>
    );
}

export function NestedApp() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/products">Products</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />}>
                    <Route path="car" element={<CarProducts />} />
                    <Route path="bike" element={<BikeProducts />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

// Styling active links:
// Styled active links are useful for: Navigation menus, Breadcrumbs, Tabs.
import { NavLink } from 'react-router-dom';

// Style function for the active links
const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px',
});

// Add functions here: Home, About, Contact
// This App is using the ones from above for simplicity

export function App8() {
    return (
        <BrowserRouter>
            {/* Navigation with NavLink for active styling */}
            <nav style={{ marginBottom: '20px' }}>
                <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
                <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
                <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

// URL Parameters
// URL parameters are variables that you can add to your route paths. They are often used to pass data between components.
import { useParams } from 'react-router-dom';

function Info() {
    const { firstname } = useParams();
    return <h1>Hello, {firstname}!</h1>
}

export function URLApp() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/customer/Emil">Emil</Link> |
                <Link to="/customer/Tobias">Tobias</Link> |
                <Link to="/customer/Linus">Linus</Link>
            </nav>

            <Routes>
                <Route path="/customer/:firstname" element={<Info />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

// useTrasnition
// The useTransition hook helps you keep your React app responsive during heavy updates.
// It lets you mark some state updates as "non-urgent", allowing other, more urgent updates to happen first.
import {useTransition} from 'react';

export function SearchBar() {
    const [text, setText] = useState('');
    const [results, setResults] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        // Urgent: update input right away
        setText(e.target.value);

        // Non-urgent: Update search results
        startTransition(() => {
            setResults(e.value);
        });
    };

    return (
        <div>
            <input value={text} onChange={handleChange} />
            {isPending ? (
                <p>Loading...</p>
            ):(
                <p>Search results for: {results}</p>
            )}
        </div>
    );
} 

// Real-World example with a search time

// useTransition Hook
// The useTransition hook returns two items:
// isPending: tells you if a transition is active
// startTransition: function to mark updates as transitions

// How this example works:
// When you type in the input field, it updates immediately
// The search results update is wrapped in startTransition
// While the results are updating, isPending is true
// The UI stays responsive even with many results

// import { useState, useTransitions } from 'react';

export function SearchResults({ query }) {
    // Simulate slow search results
    const items = [];
    if (query) {
        for (let i = 0; i < 1000; i++){
            items.push(<li key={i}>Result for {query} - {i}</li>);
        }
    }
    return <ul>{items}</ul>;
}

export function SearchApp() {
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        // Urgent: Update input field
        setInput(e.target.value);

        // Non-Urgent: update search results
        startTransition(() => {
            setQuery(e.target.value);
        });
    };

    return (
        <div>
            <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder='Type to search...'
            />
            {isPending && <p>Loading results...</p>}
            <SearchResults query={query} />
        </div>
    );
}

// React ForwardRef
// forwardRef lets your component pass a reference to one of its children. 
// It's like giving a direct reference to a DOM element inside your component.
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => (
    <input ref={ref} {...props} />
));

export function RefApp() {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <MyInput ref={inputRef} placeholder="type here..."/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

// Higher order components (HOC)
// A higher-order component is a function that takes a component and returns a new component. 
// HOCs are used to reuse component logic, such as adding common functionality to multiple components without repeating code.

// example adding a border to whatever is passed to it
export function WithBorder(WrappedComponent) {
    return function NewComponent(props) {
        return (
            <div style={{border: '2px solid blue', padding: '10px'}}>
                <WrappedComponent {...props}/>
            </div>
        );
    };
}

// Simple component wihtout border
function Greeting({name}) {
    return <h1>Hello, {name}!</h1>;
}

// Create a new component with the border
const GreetingWithBorder = WithBorder(Greeting);

export function HOCApp() {
    return (
        <div>
            <Greeting name='John' />
            <GreetingWithBorder name='Jane'/>
        </div>
    );
}

// Sass 
// Sass is a CSS preprocessor that adds features like variables, nested rules, mixins, and functions to regular CSS.
// To use Sass in a React project, you can install the node-sass package and
