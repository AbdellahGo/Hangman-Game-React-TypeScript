type Props = {
  clickedLetters: string[]
  selectedWord: string,
  winningGame: boolean | null,
  reset: () => void 
}

const Message = ({ clickedLetters, selectedWord, winningGame, reset }: Props) => {
  return (
    <div className="w-full">
      {winningGame && (
        <h2 className="w-[50%] mx-auto text-center text-green-400 font-jost font-medium text-[18px] p-[10px] border-[1px] rounded-[5px] border-green-400">
          Nice You Won <span>{'=>'}</span>
          <button className="inline-block ml-[20px] px-[20px] py-[5px] bg-green-400 text-white rounded-[5px]"
          onClick={reset}>Reset</button>
        </h2>
      )}
      {!winningGame && winningGame !== null && (
        <h2 className="w-[50%] mx-auto text-center font-jost font-medium text-[18px] text-red-400 p-[10px] border-[1px] rounded-[5px] border-red-400">
          Unfortunately, you lost <span>{'=>'}</span>
          <button className="inline-block ml-[20px] px-[20px] py-[5px] bg-red-400 text-white rounded-[5px]"
          onClick={reset}>Reset</button>
        </h2>
      )}
      {clickedLetters.length < 1 && (
        <h2 className="w-[50%] mx-auto text-center font-jost font-medium text-[18px] p-[10px] border-[1px] rounded-[5px] border-[#999]">Enter a letter to start the game</h2>
      )}
      {selectedWord.includes(clickedLetters[clickedLetters.length - 1]) && winningGame === null && (
        <h2 className="w-[50%] mx-auto text-center font-jost font-medium text-[18px] p-[10px] border-[1px] rounded-[5px] text-green-400 border-green-400">Good Job</h2>
      )}
      {!selectedWord.includes(clickedLetters[clickedLetters.length - 1]) && clickedLetters.length > 0 && winningGame === null && (
        <h2 className="w-[50%] mx-auto text-center font-jost font-medium text-[18px] p-[10px] border-[1px] rounded-[5px] text-red-400 border-red-400">Unfortunately</h2>
      )}
    </div>
  )
}

export default Message