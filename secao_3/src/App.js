import './App.css';
import Fotopessoal2 from './Assets/fotopessoal2.jpg'
import ManagerData from './components/ManagerData';
function App() {
  return (
    <div className="App">
        <h1>Avançando em React/ Seção 3</h1>
        {/* Imagem em Public*/}
        <div>
          <img src="/fotopessoal.jpg" alt="Foto sem Documento" />
        </div>
        {/* Imagem em Public*/}
        <div>
          <img src={Fotopessoal2} alt="Foto pessoal 2" />
        </div>
        <ManagerData/>
    </div>
    
  );
}

export default App;
