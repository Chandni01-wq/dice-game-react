import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import Rules from "./Rules"


const GamePlay = () => {
  const[score,setScore]= useState(0);
  const [selectedNumber , setselectedNumber]=useState();
    const[currentDice, setCurrentDice]= useState(1);
  const[error , setError]=useState("");

 const generateRandomNumber =(min , max)=>{ 
  return Math.floor( Math.random()*(max-min +1))+ min;
 }
  const rollDice=()=>{
     if(!selectedNumber){
      setError("you have not selected any number")
        return;
     }
     setError("")
    const randomNumber=generateRandomNumber(1,7);

    setCurrentDice((prev)=>randomNumber);
  
   

  if(selectedNumber===randomNumber){
    setScore((prev)=>prev+randomNumber);
  }else{
    setScore((prev)=> prev-2);
  }
  setselectedNumber(undefined)
  };


  return (
    <MainContainer>
     <div className="top_section">
     <TotalScore score={score}/>
     <NumberSelector error={error}
     setError={setError}
      selectNumber={selectedNumber}setSlectedNumber={setselectedNumber}/>
     </div>
     <RollDice currentDice={currentDice}rollDice={rollDice}
     />
  <Rules/>
    </MainContainer>
  )
}

export default GamePlay
const MainContainer=styled.main`
padding-top: 70px;
padding-right: 10px;
.top_section{
     display: flex;
     justify-content: space-between;
      align-items: end;   
}`