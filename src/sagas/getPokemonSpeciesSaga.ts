import { put, takeEvery } from 'redux-saga/effects'
import { fetchPokemonSpeciesSuccess, ISpecies } from '../features/getOnePokemon/pokemonOneSlice'
import { type PayloadAction } from "@reduxjs/toolkit";


export function* fetchPokemonSpecies (action: PayloadAction<string>) {

    const response: Response = yield fetch(action.payload)

    const species: ISpecies = yield(response.json())

    yield put(fetchPokemonSpeciesSuccess(species))

}

export function*getPokemonSpeciesSaga(){
    yield takeEvery('onePokemon/fetchPokemonSpecies', fetchPokemonSpecies)
}