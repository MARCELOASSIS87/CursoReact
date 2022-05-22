import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Formulários lá vamos nós!</h1>
      <MyForm user={{ 
        name: "Josias", 
        email: "josi@mama.com", 
        bio: "Sou lindo", 
        role: "admin" 
        }} />
    </div>
  );
}

export default App;
