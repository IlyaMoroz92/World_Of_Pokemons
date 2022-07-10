import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchPokemonsFailure, fetchPokemonsSuccess, type Pokemons } from '../features/getPokemons/pokemonsSlice'

type FetchPokemons = {
    count: number, 
    next: null, 
    previous: null, 
    results: Pokemons
}

export function* fetchPokemons(offset: any) {

    try {
        
        const response: Response = yield fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset.payload}&limit=20`)

        const pokemons: FetchPokemons = yield(response.json())
        
        /* console.log(pokemons); */
        
        yield put(fetchPokemonsSuccess(pokemons.results))

    }
    catch(error: any){
        yield put(fetchPokemonsFailure(error.message))
    }
}

export function*fetchPokemonsSaga(){
    yield takeEvery('pokemons/fetchPokemons', fetchPokemons)
}