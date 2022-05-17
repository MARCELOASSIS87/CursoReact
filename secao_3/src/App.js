import { useState } from 'react';
import './App.css';
import Fotopessoal2 from './Assets/fotopessoal2.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManagerData from './components/ManagerData';
import ShowUserName from './components/ShowUserName';
function App() {
  const name = "Pitchulo";
  const [userName] = useState("Maria");

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
      <ManagerData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Marcelo" /**Direto*/ />
      <ShowUserName name={name} /**Pela variável*/ />
      <ShowUserName name={userName} /**Pelo useState*/ />
      <CarDetails brand="VW" km={100000} color="Azul" />
    </div>

  );
}

export default App;
