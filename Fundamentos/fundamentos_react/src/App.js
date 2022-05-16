import FirstComponent from './components/FirstComponent';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <h2>Aqui o componente:</h2>
      <Challenge />
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      
    </div>
  );
}

export default App;
