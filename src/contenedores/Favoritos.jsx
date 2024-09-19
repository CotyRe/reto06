import Contexto from "../contexto/Contexto";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Favoritos() {
    const {favoritos, dameUnPoke} = useContext(Contexto)
    return ( <>
    <h1>Tus Pokemones favoritos</h1>
    <ul>
        {favoritos.map((favorito)=>{
            return <li key={favorito.name}>
                <Link to={"/pokemones/" + favorito.url.split("/")[6]}>{favorito.name}</Link>
                </li>
        })}
    </ul>
    <Link to="/pokemones"> <button>AGREGAR MÁS</button></Link>
    
    </> );
}

export default Favoritos;