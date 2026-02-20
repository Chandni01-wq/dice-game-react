import { useState } from "react";
import Startgame from "./Components/startgame";
import GamePlay from "./Components/GamePlay";
import TotalScore from "./Components/TotalScore";


function App() {
  const[isGameStarted , setIsGameStarted]=useState(true);
  const [score, setScore] = useState(0);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=> !prev);  //prev value reverse kr dega fase ka true and vice-versa
  }
  return (
    <>
    {
      isGameStarted ? 
      <GamePlay /> : <Startgame toggle={toggleGamePlay} />
     
    }
    </>
  )
}

export default App;


