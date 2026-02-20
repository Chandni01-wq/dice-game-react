import { useState } from "react"
import styled from "styled-components"

const NumberSelector = ( {setError,error,selectNumber,setSlectedNumber}) => {
     const arrNumber=[1,2,3,4,5,6];

     const numberSelectorHandler=(value)=>{
     setSlectedNumber(value)
     setError("")
     }
     
  
   
     //  {/* <Box >1</Box>
     //   <Box>2</Box>
     //    <Box>3</Box>
     //     <Box>4</Box>
     //      <Box>5</Box>
     //       <Box>6</Box> */}
    
  {/* //shortercut box k liye ek array bana lo */}
  
  return( 
     <NumberSelectorCotainer  >
      <p className="error">{error}</p>
      
          <div className="flex">
          {arrNumber.map((value,i)=>(
               <Box 
               isSelected={value===selectNumber}
               key={i} onClick={()=>numberSelectorHandler(value)}>{value}
               </Box>
              ) )}
              </div>
              <br></br>
              <p>Select Number</p>
   </NumberSelectorCotainer>
  );
};

export default NumberSelector;
 
const NumberSelectorCotainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
   .flex{
     display: flex;
     gap:24px;
   }  
   p{
     font-size: 24px;
     font-weight: 700px;
   }
   .error{
    color: red;
   }
`

const Box=styled.div`
     height: 80px;
     width:80px ;
     border:1px solid black;
     display: grid;
     place-items: center;
     font-size: 34px;
     font-weight: 700;
     background-color: ${(props)=>props.isSelected ? "black":"white"};
     
     color: ${(props)=>(!props.isSelected ? "black":"white")};
     cursor: pointer;
      
`;