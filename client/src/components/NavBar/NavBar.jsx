import { NavLink, useNavigate,useLocation } from "react-router-dom";
import { getAllGames, getGamesByName, getGenres } from '../../redux/actions.js';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar.jsx'
import {StyledNav} from "./styledComponents.js";


const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
    },[dispatch])
    const onSearch = (name) => {
        dispatch(getGamesByName(name))
        navigate('/home')
    }
    
    return (
        <StyledNav style={{display: location.pathname==='/'? 'none': 'flex'}}>
            <div>
             <h1>Videojuegos App</h1>
            </div>
            <div>
             <NavLink className='navLink' to='/home' >Home</NavLink>
            </div>
            <div>
             <NavLink className='navLink' to='/createForm' >Crear videojuego</NavLink>
            </div>
            <div>
             <SearchBar onSearch={onSearch}/>         
            </div>
        </StyledNav>
    )
}



export default NavBar