import { Dispatch, SetStateAction } from "react"

type Props = {
  randomWords: string,
  clickedLetters: string[]
  setWinningGame: Dispatch<SetStateAction<boolean | null>>,
  winningGame: boolean | null
}

const WordField = ({ randomWords, clickedLetters, winningGame }: Props) => {

  return (
    <div>
      <div className="mt-[40px] flex justify-center w-full">
        <div className="flex gap-[25px]">
          {randomWords.split('').map((letter, i) => {
            return (<div key={i} className="relative flex justify-center">
              <h4 className="font-jost text-[18px] ">
                {clickedLetters.includes(letter) ? letter : ''}
              </h4>
              <h4 className="font-jost text-[18px] text-red-600">
                {winningGame === false && !clickedLetters.includes(letter) ? letter : ''}
              </h4>
              <span className="absolute w-[15px] h-[2px] bottom-0 bg-black" />
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default WordField