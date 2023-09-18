import {StyledCard} from './styleComponents';
import { Link } from 'react-router-dom';

const Card = ({game}) => {
    return (
        <Link styled={{textDecoration:'none'}} to={`/detail/${game.id}`}>
        <StyledCard>
           <h1>{game.name}</h1>
           <h2>Genres: {game.genres}</h2>
           <img src={game.background_image} alt="Loading..." />
        </StyledCard>        
        </Link>
    )
}



export default Card