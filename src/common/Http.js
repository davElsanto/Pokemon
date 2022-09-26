import axios from "axios";

const apiUrl = process.env.REACT_APP_BP;

const getPokemons = () => {
    // console.log(apiUrl)
    axios.get(apiUrl)
}
 
export {getPokemons}