import '../assets/css/Inicio.css'
import { Link } from 'react-router-dom'

function Inicio() {
    let frases = [
        "A veces, para poder seguir, hay que empezar de nuevo.",
        "A las circunstancias la boicotea el tiempo, a las importancias los miedos.",
        "Bien parado o en la lona, hay que ser buena persona.",
        "Serás aquello en lo que enfoques.",
        "Vivir solo cuesta vida.",
        "El enemigo peor, ese gran saboteador, siempre será uno mismo.",
        "Para llegar no hay que correr, tan solo hay que seguir andando.",
        "Hay tantas cosas que se pueden complicar, pero antes muerto que dejar de soñar."
    ]
    const random = Math.floor(Math.random()*7)
    let frase = frases[random]
    return ( <main>
    <h3>Tu frase del día:</h3>
    <h1>{frase}</h1>
    <Link to="/pokemones"> <button>DESCUBRÍ LOS POKEMONES</button></Link>
    </main> );
}

export default Inicio;