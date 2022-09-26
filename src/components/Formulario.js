const Formulario = (props) => {
    const min = 0
    const max = 200
    return (
        <div className="contenedor formulario-contenedor">
        <p>Nuevo Pokemon</p>

        <div className="row">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" value={props.pokemon.nombre}/>

            <label for="ataque">Ataque:</label>
            0
            <input type="range" id="ataque" value={props.pokemon.ataque} min={min} max={max}/>
            100

        </div>
        <div className="row">

            <label for="imagen">Imagen:</label>
            <input type="text" id="imagen" value={props.pokemon.imagen}/>


                <label for="defensa">Defensa:</label>
                0
                <input type="range" id="defensa" value={props.pokemon.defensa} min={min} max={max}/>
                100

        </div>
        <div className="botonera">
            <button>Guardar</button>
            <button>Cancelar</button>
        </div>
        
    </div>
);
};

export default Formulario;
