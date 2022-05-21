import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/**CSS global */}
      <h1>React com css</h1>
      {/**CSS de componente */}
      <MyComponent />
      <p>este é o parágrafo do App.js</p>
      {/*inline CSS*/}
      <p style={{ color: 'blue', padding: '25px', borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
