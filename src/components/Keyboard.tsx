import { Dispatch, SetStateAction } from "react"

type Props = {
  clickedLetters: string[],
  setClickedLetters: Dispatch<SetStateAction<string[]>>,
  winningGame: boolean | null
}

const Keyboard = ({ clickedLetters, setClickedLetters, winningGame }: Props) => {
  const letters = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
  return (
    <div className="w-full flex justify-center mt-[40px]">
      <div className="relative w-[50%] grid md:grid-cols-10 sm:grid-cols-6 grid-cols-5 gap-[10px]">
        <span className={`${winningGame === false || winningGame === true ? 'block' : 'hidden'} left-[-15px] top-[-15px] rounded-[10px] absolute bg-[#00000040]`}
        style={{width: 'calc(100% + 30px)', height: 'calc(100% + 30px)'}}/>
        {letters.split('').map((letter) => (
          <button key={letter} disabled={clickedLetters.includes(letter)} 
            className={`${clickedLetters.includes(letter) ? 'text-[#00000050] border-[#00000050]': 'hover:bg-blue-400 hover:text-white'} block py-[5px]  border-[1px] transition border-black`}
            onClick={() => setClickedLetters(prev => [...prev, letter])}>
            <h3 className="font-jost text-18 font-medium">{letter}</h3>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Keyboard