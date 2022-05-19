import { useState } from 'react';
import './App.css';
import Fotopessoal2 from './Assets/fotopessoal2.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManagerData from './components/ManagerData';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
function App() {
  const name = "Pitchulo";
  const [userName] = useState("Maria");

  const cars = [
    {
      id: 1,
      brand: "ferrari", color: "Amarelo", newCar: true, km: 0
    },
    {
      id: 1,
      brand: "kia", color: "branco", newCar: false, km: 513540
    },
    {
      id: 1,
      brand: "reanult", color: "Azul", newCar: false, km: 1568
    },
  ]

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
      {/* props */}
      <ShowUserName name="Marcelo" /**Direto*/ />
      <ShowUserName name={name} /**Pela variável*/ />
      <ShowUserName name={userName} /**Pelo useState*/ />
      {/* destructuring */}
      <CarDetails
        brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails
        brand="ford" color="vermelho" km={0} newCar={true} />
      <CarDetails
        brand={"fiat"} color="verde" km={4500} newCar={false} />
      {/* loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/**fragment */}
      <Fragment propFragment={"teste"}/>
      {/**cihldren */}
      <Container myValue="testing">
        <p>Este é o conteúdo</p> 
      </Container>
    </div>

  );
}

export default App;
