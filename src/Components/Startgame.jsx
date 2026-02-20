import styled from 'styled-components'

const Startgame = ({toggle}) => {
  return (
     <Container >
         <div> <img src='/Images/Dices/dicess.png'/>
         </div>
          <div className='content'>
               <h1>
                   Dice Game
               </h1>
               <Button onClick={toggle}>Play Now</Button>
          </div>

     </Container>
  )
  
};

export default Startgame;

const Container=styled.div`
    max-width: 1180px ;
    display: flex;
    margin: 0 auto ;
    height: 100vh;
    align-items: center;

    .content{
     h1{
font-size: 96px;
white-space: nowrap;
    }
}
`;


const Button = styled.button`
padding: 10px 18px;
color: white;
background: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
cursor: pointer;

&:hover{
     background-color: gray;
     border: 1px solid black;
     color: black;
}
`;