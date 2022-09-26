
const Listado = (props) => {

    // todo: cambiar este valor pues esta dando un error
    // const listado = data.map(item => {
    //     <tr>
    //         <td>{item.nombre}</td>
    //     </tr>
    // })

    return <div className="contenedor contenedor-pokemon">
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* {listado} */}
                {
                    
                    props.data.map(item => <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td><img src={item.imagen} alt={item.nombre}/> </td>
                        <td>{item.ataque}</td>
                        <td>{item.defensa}</td>
                        <td>
                            <button onClick={ () => {props.asignarPokemon({item})}}>✒️</button>
                            <button>❌</button>
                        </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default Listado