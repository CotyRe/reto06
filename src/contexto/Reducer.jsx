//TYPES
const LISTAME_POKEMONES = "LISTAME_POKEMONES"
const DAME_POKEMON = "DAME_POKEMON"
const GUARDAME_POKEMON = "GUARDAME_POKEMON"

export default function Reducer (state, action){
    const {payload, type} = action
    switch (type) {
        case LISTAME_POKEMONES:
            return {...state, pokemones: payload}
        case DAME_POKEMON:
            return {...state, pokemon: payload}
        case GUARDAME_POKEMON:
            return {...state, favoritos: [...state.favoritos, payload]}
    }
}