import React from 'react';
import './App.css';

const DEFAULT_VALUE = {
  text: 'hello'
}

const CurrentContext = React.createContext(DEFAULT_VALUE)

function App() {
  const context = React.useContext(CurrentContext);
  return (
    <div className="App">
      {context.text}
      <Component1 />
    </div>
  );
  
}

function Component1() {
  return (
    <div>
      <Component2 />
    </div>
  )
}

function Component2() {
  return (
    <div>
      <Component3 />
    </div>
  )
}

function Component3() {
  const context = React.useContext(CurrentContext);
  const [inputValue, setInputValue] = React.useState("");
  const count = React.useRef(0);

  React.useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      {`${context.text} again!`}
      <br/>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>Render Count: {count.current}</div>
    </div>
  )
  
}

export default App;