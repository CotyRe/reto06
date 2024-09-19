import {useEffect, useState, useContext} from "react"
import axios from "axios"
import '../assets/css/Pokemones.css'
import Contexto from "../contexto/Contexto"
import {Link} from "react-router-dom"

function Pokemones() {
    //const [pokemones, setPokemones] = useState([])
    const {agregarAFavoritos, traemePokemones, pokemones, favoritos} = useContext(Contexto)
    // const traigoPokemones = async ()=>{
    //     const res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    //     setPokemones(res.data.results)
    //     console.log("pokemones: ",pokemones)
    //     console.log("res: ", res)
    // }
    const handleAgregar = (pokemon)=>{
        console.log("apretaste agregar a: ", pokemon)
        agregarAFavoritos(pokemon)
        console.log("despues de agregar, estos son los favoritos: ", favoritos)
    }
    
    useEffect(()=>{
        console.log ("soy use effect")
        traemePokemones()
    },[])
    return ( <>
    <h1>Estos son tus Pokemones</h1>
    <ul>
        {pokemones.map((pokemon)=>{
            return <li key={pokemon.name}>
                <Link to={"/pokemones/" + pokemon.url.split("/")[6]}>{pokemon.name} </Link>
                <button onClick={()=>{handleAgregar(pokemon)}} className="btnFav">🤍</button>
                </li>
        })}
    </ul>
    <button onClick={traemePokemones}>LLAMAR POKEMONES</button>
    </> );
}

export default Pokemones;