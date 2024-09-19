import { BrowserRouter, Route, Routes} from "react-router-dom"
import Inicio from "../contenedores/Inicio";
import Pokemones from "../contenedores/Pokemones";
import '../assets/css/App.css'
import Layout from "../componentes/Layout";
import Pokemon from "../contenedores/Pokemon";
import Favoritos from "../contenedores/Favoritos";
import UsarContexto from "../contexto/UsarContexto";

function App() {
    return ( <>
    <BrowserRouter>
        <UsarContexto>
            <Layout>
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/pokemones" element={<Pokemones/>} />
                    <Route path="/pokemones/*" element={<Pokemon/>} />
                    <Route path="/favoritos" element={<Favoritos/>} />
                </Routes>
            </Layout>
        </UsarContexto>
    </BrowserRouter>
    </> );
}

export default App;