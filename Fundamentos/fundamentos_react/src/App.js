import FirstComponent from './components/FirstComponent';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <h2>Aqui o componente:</h2>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
    </div>
  );
}

export default App;
