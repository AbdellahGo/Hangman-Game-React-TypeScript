import { useEffect, useState } from "react"
import { HangMan, Keyboard, Message, WordField } from "./components"

function App() {
  const words: string[] = [
    "apple", "banana", "cherry", "date", "elderberry",
    "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "papaya", "quince",
    "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
    "watermelon", "viga", "yam", "zucchini", "blueberry"
  ];

  let [numberOfWrongLetters, setNumberOfWrongLetters] = useState<number>(0)
  const [selectedWord, setSelectedWord] = useState<string>(words[Math.floor(Math.random() * words.length)].toUpperCase())
  const [winningGame, setWinningGame] = useState<boolean | null>(null)
  const [clickedLetters, setClickedLetters] = useState<string[]>([])

  const reset = (): void => {
    setWinningGame(null)
    setClickedLetters([])
    setSelectedWord(words[Math.floor(Math.random() * words.length)].toUpperCase())
  }

  const CheckGameVictory = (letters: string[], selectedWord: string): void => {
    const newWord: string = [...new Set(selectedWord)].join('')
    let trueLetters: number = 0
    let falseLetters: number = 0
    letters.forEach((letter) => {
      if (newWord.includes(letter)) {
        trueLetters++
      } else {
        falseLetters = falseLetters + 1
      }
    })

    if (trueLetters === newWord.length) {
      setWinningGame(true)
    }
    if (falseLetters === 10) {
      setWinningGame(false)
    }
  }

  const addParts = (): void => {
    setNumberOfWrongLetters(0)
    for (let i = 0; i < clickedLetters.length; i++) {
      setNumberOfWrongLetters(prev => selectedWord.includes(clickedLetters[i]) ? prev : prev + 1)
    }
  }
  useEffect(() => {
    CheckGameVictory(clickedLetters, selectedWord)
    addParts()
  }, [clickedLetters])

  localStorage.setItem('words', JSON.stringify(words))
  localStorage.setItem('selectedWord', JSON.stringify(selectedWord))
  return (
    <div className="flex flex-col justify-center items-center w-full  py-[20px] relative">
      <Message reset={reset} winningGame={winningGame} clickedLetters={clickedLetters} selectedWord={selectedWord} />
      <HangMan numberOfWrongLetters={numberOfWrongLetters} />
      <WordField winningGame={winningGame} setWinningGame={setWinningGame} randomWords={selectedWord} clickedLetters={clickedLetters} />
      <Keyboard winningGame={winningGame} clickedLetters={clickedLetters} setClickedLetters={setClickedLetters} />
    </div>
  )
}

export default App
