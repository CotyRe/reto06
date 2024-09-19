import {useEffect, useState, useContext} from "react"
import axios from "axios"
import '../assets/css/Pokemon.css'
import Contexto from "../contexto/Contexto"
import { useLocation, Link } from "react-router-dom";

function Pokemon() {
    const {agregarAFavoritos, pokemones, name, url, dameUnPoke} = useContext(Contexto)
    const [ unPoke, setUnPoke] = useState([])

    const location = useLocation();
    const pedazos = location.pathname.split("/")
    const urlPoke = "https://pokeapi.co/api/v2/pokemon/"+pedazos[2]+"/"
    
    const traemePokemon = async ()=>{
        
        const res = await axios.get(urlPoke)
        console.log("res: ", res)
        setUnPoke(res.data)

    }
    const handleClick = (unPoke)=>{
        console.log("apretaste agregar a fav: ", unPoke)
        const nuevoFav = {
                "name": unPoke.name,
                "url": urlPoke
            }
            console.log("nuevo fav: ", nuevoFav)
        agregarAFavoritos(nuevoFav)
    }
    useEffect(()=>{
        console.log ("soy use effect")
        traemePokemon()
    },[])
//
    return ( <section className="sectionPokemon">
    {unPoke? <>
    <h2>{unPoke.name}</h2>

    <img src={unPoke?.sprites?.other["official-artwork"]?.front_default} alt="" />
    <button onClick={(e)=>{handleClick(unPoke)}} className="btnFav">🤍</button> 
    </>:<>
    <h2>Cargando...</h2>
    </>}
    
    <Link to="/pokemones"> <button>VER MÁS POKEMONES</button></Link>
    </section> );
}

export default Pokemon;