import { put, takeEvery } from 'redux-saga/effects'
import { fetchPokemonSpeciesSuccess } from '../features/getOnePokemon/pokemonOneSlice'
import { type PayloadAction } from "@reduxjs/toolkit";


export function* fetchPokemonSpecies (action: PayloadAction<string>) {


        
        const response: Response = yield fetch(action.payload)

        const species: object = yield(response.json())
        
        console.log(action.payload);
        
        yield put(fetchPokemonSpeciesSuccess(species))


}

export function*getPokemonSpeciesSaga(){
    yield takeEvery('onePokemon/fetchPokemonSpecies', fetchPokemonSpecies)
}