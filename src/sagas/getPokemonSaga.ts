import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchPokemonFailure, fetchPokemonSuccess, IPokemon } from '../features/getOnePokemon/pokemonOneSlice'
import { PayloadAction } from '@reduxjs/toolkit';

export function* fetchPokemon(action: PayloadAction<number>) {

    try {
        const response: Response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${action.payload}`)
        const pokemon: IPokemon = yield(response.json())
        /* console.log(pokemon); */
        
        yield put(fetchPokemonSuccess(pokemon))

    }
    catch(error: any){
        yield put(fetchPokemonFailure(error.message))
    }
}

export function*fetchPokemonSaga(){
    yield takeEvery('onePokemon/fetchPokemon', fetchPokemon)
}