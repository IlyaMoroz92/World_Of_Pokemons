import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from 'redux-saga/effects';
import { fetchPokemonsInfoSuccess, fetchPokemonsInfoFailure, type Pokemons } from "../features/getPokemons/pokemonsSlice";
import { IPokemon } from "../features/getOnePokemon/pokemonOneSlice";

export function* fetchPokemonsInfo(action: PayloadAction<Pokemons>) {
    try {

        const requests: Response[] = yield(action.payload.map(pokemon => {
            return (
                fetch(pokemon.url)
            )
        }))
        const data: IPokemon[] = yield(
            Promise.all(requests)
            .then((responses) => Promise.all(responses.map(r => r.json())))
        )
        yield put(fetchPokemonsInfoSuccess(data))
        
    } catch (error: any) {
        yield put(fetchPokemonsInfoFailure(error))
    }
}

export function* getPokemonsInfoSaga() {
    yield takeEvery('pokemons/fetchPokemonsSuccess', fetchPokemonsInfo)
}