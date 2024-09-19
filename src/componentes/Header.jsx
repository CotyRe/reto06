import Inicio from "../contenedores/Inicio";
import Pokemones from "../contenedores/Pokemones";
import Favoritos from "../contenedores/Favoritos";
import {Link} from "react-router-dom";
import "../assets/css/Header.css"

function Header() {
    return ( <>
    <nav>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/pokemones"}>Pokemones</Link>
        <Link to={"/favoritos"}>Favoritos</Link>
    </nav>
    </> );
}

export default Header;