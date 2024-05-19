
type Props = {
  numberOfWrongLetters: number
};

const HangMan = ({numberOfWrongLetters}: Props) => {
  
  const hangManParts = [
    { className: "absolute bottom-0 w-[250px] h-[5px] bg-black" },
    { className: "absolute w-[5px] h-[350px] bg-black" },
    { className: "absolute left-[50%] w-[200px] h-[5px] bg-black" },
    { className: "absolute left-[200px] w-[5px] h-[50px] bg-black" },
    { className: "absolute left-[178px] top-[50px] border-[5px] border-black w-[50px] h-[50px] rounded-full" },
    { className: "absolute left-[200px] top-[100px] w-[5px] h-[80px] bg-black" },
    { className: "absolute left-[170px] rotate-[-60deg] top-[75px] w-[5px] h-[70px] bg-black" },
    { className: "absolute left-[230px] rotate-[60deg] top-[75px] w-[5px] h-[70px] bg-black" },
    { className: "absolute left-[176px] rotate-[45deg] top-[166px] w-[5px] h-[70px] bg-black" },
    { className: "absolute left-[224px] rotate-[-45deg] top-[166px] w-[5px] h-[70px] bg-black" },
  ];
  

  return (
    <div className="mt-[40px] flex justify-center h-[350px] relative bg-red-200">
      {hangManParts.slice(0, numberOfWrongLetters).map((part, index) => (
        <div key={index} className={part.className}></div>
      ))}
    </div>
  );
};

export default HangMan;
