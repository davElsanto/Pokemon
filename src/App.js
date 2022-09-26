import "./App.css";
import Busqueda from "./components/Busqueda";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import {getPokemons} from "./common/Http"
import React from "react";
import axios from "axios";
import Pokemon from "./models/Pokemon"

function App() {
	
	const [data, setData] = React.useState([]);
	const [dataFiltro, setDataFiltro] = React.useState([]);
	const [busqueda, setBusqueda] = React.useState()
	const [flag, setFlag] = React.useState(true)
	const [pokemon, setPokemon] = React.useState({})

	const filtroHandrer = (event) => {
		// console.log(event.target.value)
		const filtro = event.target.value
		
		setBusqueda(filtro)
		const dataAux = {
			...data.filter(item => item.nombre.toLowerCase().indexOf(filtro.toLowerCase()) > - 1)
		}
		console.log(dataAux)
		setDataFiltro(dataAux)

	}

	const editPokemonHandler = (pokemon) => {

		setPokemon(pokemon.item)

	}

	React.useEffect(() => {
		axios.get("https://bp-pokemons.herokuapp.com/?idAuthor=1")
			.then(values => {
				const items = values.data.map(item => new Pokemon(item.id, item.name, item.attack, item.image, item.defense))
				setData(items)
			})
			.catch(error => console.log(error))
	})
	
	return <div className="App">
		<p>Listado de Pokemon</p>
		<Busqueda busqueda={busqueda} filtroHandrer={filtroHandrer}/>

		<Listado data={ flag ? data: dataFiltro} asignarPokemon={editPokemonHandler}/>

		<Formulario pokemon={pokemon}/>
	</div>;
}

export default App;
