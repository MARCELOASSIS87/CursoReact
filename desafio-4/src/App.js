import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const arrayPessoas = [
    {
      id:1,
      nome: "Marcelo",
      sobrenome: "Assis",
      idade: 34,
      profissao: "Leiturista"
    },
    {
      id:2,
      nome: "Carol",
      sobrenome: "Assis",
      idade: 37,
      profissao: "Esposa doida"
    },
    {
      id:3,
      nome: "Lais",
      sobrenome: "Assis",
      idade: 14,
      profissao: "estudante"
    },
  ]
  return (
    <div className="App">
      {arrayPessoas.map((pessoa) => (
        <UserDetails key={pessoa.id}
          nome={pessoa.nome}
          sobrenome={pessoa.sobrenome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}

    </div>
  );
}

export default App;
