const Busqueda = (props) => {
    return <div className="contenedor componente-busqueda">
			<input 
			type="text" 
			placeholder="🔍 Buscar" 
			value={props.busqueda}
			onChange={props.filtroHandrer}/>
			<button>✒️ Nuevo </button>
		</div>
}

export default Busqueda