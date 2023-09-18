import { useNavigate } from "react-router-dom"
import {StyledLanding} from "./styledComponents";

const Landing = () => {
    const navigate = useNavigate();
    
    return (
        <StyledLanding>
            <button onClick={() => navigate('/home')}>START</button>
        </StyledLanding>
    )
}

export default Landing