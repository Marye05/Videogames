import styled from 'styled-components'

export const StyledCard = styled.div`
color: red;
border: 10px solid red;
border-radius: 20px;
margin: 20px;
width: 450px;
height: 350px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: space-between;
padding: 20px;
background-image: url('https://img.freepik.com/vector-premium/cartel-ciberespacio-vectorial-fondo-videojuegos-fondo-pantalla-universo-cibernetico_655372-12.jpg?w=740');
h1 {
    text-decoration: none;
    margin: 0;
}
img {
    width: 400px;
    object-fit: cover;
    object-position: top;
    height: 57%;
}
`;