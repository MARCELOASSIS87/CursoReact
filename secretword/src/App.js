//CSS
import './App.css';
//REACT
import { useCallback, useState, useEffect } from 'react';
//DATA
import { wordsList } from './data/words';
//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

const guessesQty = 3
function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setguessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    //pegando categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }, [words]);
  //strats secret word game
  const startGame = useCallback(() => {
    clearLetterStates();
    //pick word and category
    const { word, category } = pickWordAndCategory();

    //criadno array de letras
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

  
    //fill states

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  },[pickWordAndCategory]);

  //process the letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase()
    //checa se a letra ja foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setguessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  //checa condição de derrota

  useEffect(() => {
    if (guesses <= 0) {
      //reset all stages
      clearLetterStates();

      setGameStage(stages[2].name);

    }
  }, [guesses])
  // checa condição de vitoria
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    // condição de vitoria
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => actualScore += 100)
      startGame();
    }


  }, [guessedLetters, letters, startGame]);


  //restart the Game
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  };

  const clearLetterStates = () => {
    setguessedLetters([]);
    setWrongLetters([]);
  };
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}

        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
