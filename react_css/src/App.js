import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Marcelo")
  const redTitle = false;
  return (
    <div className="App">
      {/**CSS global */}
      <h1>React com css</h1>
      {/**CSS de componente */}
      <MyComponent />
      <p>este é o parágrafo do App.js</p>
      {/*inline CSS*/}
      <p style={{
        color: 'blue',
        padding: '25px',
        borderTop: "2px solid red"
      }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/** CSS inline dinâmico*/}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: 'pink' })}>
        CSS dinâmico</h2>
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: 'pink' })}>
        CSS dinâmico</h2>
      <h2 style={name === "Marcelo" ? { color: "green", backgroundColor:"#000" } : null }>
        CSS dinâmico</h2>
      {/**Classes dinâmicas no CSS */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter clase dinâmica</h2>  
      {/** CSS modules */}
      <Title />  
    </div>
  );
}

export default App;
