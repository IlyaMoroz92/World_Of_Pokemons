/* import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchPokemonFailure, fetchPokemonSuccess, IPokemon } from '../features/getOnePokemon/pokemonOneSlice'
import { PayloadAction } from '@reduxjs/toolkit';

export function* fetchPokemon(action: PayloadAction<number>) {

    try {
        const response: Response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${action.payload}`)
        const pokemon: IPokemon = yield(response.json())
        console.log(pokemon);
        
        yield put(fetchPokemonSuccess(pokemon))

    }
    catch(error: any){
        yield put(fetchPokemonFailure(error.message))
    }
}

export function*fetchPokemonSaga(){
    yield takeEvery('onePokemon/fetchPokemon', fetchPokemon)
} */

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
        /* console.log(data); */
        yield put(fetchPokemonsInfoSuccess(data))
        
    } catch (error: any) {
        yield put(fetchPokemonsInfoFailure(error))
    }
}

export function* getPokemonsInfoSaga() {
    yield takeEvery('pokemons/fetchPokemonsSuccess', fetchPokemonsInfo)
}