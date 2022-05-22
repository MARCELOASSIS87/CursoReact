import './App.css';
import ComponenteCarDetails from './components/ComponenteCarDetails';

function App() {
  const cars = [
    {
      brand: "ferrari", color: "Amarelo", newCar: true, km: 0
    },
    {
      
      brand: "kia", color: "branco", newCar: false, km: 513540
    },
    {
      
      brand: "reanult", color: "Azul", newCar: false, km: 1568
    },
  ]
  return (
    <div className="App">
      <h1>Desafio CSS </h1>
      <div className='my_car'>
        {cars.map((car) => (
          <ComponenteCarDetails car={car} />
        ))}
      </div>

    </div>
  );
}

export default App;
