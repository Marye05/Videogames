import styled from 'styled-components'

export const StyledForm = styled.div`
    padding: 10px;
    background-image: url('https://fondosmil.com/fondo/3617.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    justify-content: space-around;
    color: #740496;
    div {
      margin: 10px;
      border: 5px solid #740496 ;
      padding: 20px;
      border-radius: 15px;
      background-color: #ffffffb5;
    }
    .genres {
      width: 30%;
      text-align: center;
    }
    .genres div {
      border: none;
      display: flex;
      flex-wrap: wrap;
      align-items : center;
      justify-content: center;
      gap: 5px;      
    }
    .genres button {
      font-size: 17px;
      color: #5d0279;
      border-radius: 7px;
      border: 3px solid #740496;
    }
    .submit {
      font-size: 25px;
      color: white;
      background-color: #c71919;
      border-radius: 7px;
      border: 3px solid red;
    }
`;