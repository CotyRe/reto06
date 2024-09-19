import Contexto from "./Contexto";
import {useEffect, useState, useReducer} from "react"
import axios from "axios"
import Reducer from "./Reducer";

function UsarContexto(props) {
    const {children} = props
//estado inicial de mi array que consume todo el mundo
    const estadoInicial = {
        pokemones: [],
        favoritos: []
    }
//llamo al reducer
    const [state, dispatch] = useReducer(Reducer, estadoInicial)
//funcion de traer pokemones
    const traemePokemones = async () => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        dispatch({type:"LISTAME_POKEMONES", payload:res.data.results })
    }

    const agregarAFavoritos = (i)=>{
        console.log("apretaste Agregar A Favoritos: ", i)
        dispatch({type: "GUARDAME_POKEMON", payload: i})
        console.log("tus guardados son: ", i)
        console.log("array de favoritos: ", state.favoritos)
    }

    const dameUnPoke = (i)=>{
        console.log("dame un poke")
        dispatch({type: "DAME_POKEMON", payload: {
            name: i.name,
            url: i.url
        }})
    }
    //poner esto en pokemon llamando pokemon.url para que sepa quien es
    // {
    //     "name": "charizard",
    //     "url": "https://pokeapi.co/api/v2/pokemon/6/"
    // }
    return ( <>
    <Contexto.Provider value={{agregarAFavoritos, traemePokemones, pokemones: state.pokemones, favoritos: state.favoritos, ...dameUnPoke}}>{children}</Contexto.Provider>
    </> );
}

export default UsarContexto;