import {useState} from 'react'
import './App.css';
import {Display} from "./components/Display";
import {ButtonArea} from"./components/ButtonArea";
import a from "./a.mp3"
const operators = ["+", "-", "%", "/"]
function App() {

  const [str, setStr] = useState("")
  const [lastOperator, setlastOperator] = useState ("")
  const [isPrank, setIsPrank] = useState(false)
  const[audio] = useState(new Audio(a));

  const handleOnClick = (value) => {
    isPrank && setIsPrank (false)

    // what we should do when we click on every button

    if(value === "AC") {
      setStr("");
      return;

    }
    if (value === "="){
      return onTotal ();
    }


  if (value === "C"){
    const temStr = str.slice(0, -1)
    setStr(temStr);
    return;
  }

  if (operators.includes(value)){
    setlastOperator(value);
    const lastChar = str.slice(-1);
    if (operators.includes(lastChar)){
      const strWithOutLastChar = str.slice(0, -1);
      setStr(strWithOutLastChar + value);
      return;

    }

    if (value === ".") {
      if (lastOperator){
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        const beforeLastOperator = str.slice (0, positionOfLastOperator +1)
        const afterLastOperator = str.slice(positionOfLastOperator +1);
        if(afterLastOperator.includes(".")){
          return;
        }
      }
      else{

      
      if (str.includes(".")){
        return;
      }
    }

    }
  }
  setStr(str + value)
}


  const onTotal = () =>{
    const prankVal = randomNumber();
    prankVal > 0 && audio.play() && setIsPrank(true);
    const ttl = eval(str) + prankVal;
    setStr(ttl.toFixed().toString());
  }
  const randomNumber = ()=>{
    const num = Math.ceil (Math.random() * 10)
    return num >3 ? 0 : num
  }
  return (
    <div className="wrapper">
      <Display str={str} isPrank={isPrank} />
    
    {/* <!-- correct way is to give different div to input and all the buttons -÷÷ */}
    <ButtonArea handleOnClick = {handleOnClick}/>      
    </div>
  );
}

export default App;
