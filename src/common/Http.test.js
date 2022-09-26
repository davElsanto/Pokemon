import {configAxios, getPokemons} from './Http'

it('get', () => {
    configAxios()
    getPokemons()
})