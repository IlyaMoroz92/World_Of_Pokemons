import { configureStore } from "@reduxjs/toolkit"
import themeReducer from '../features/theme/themeSlice'
import createSagaMiddleware from "@redux-saga/core"
import {fetchPokemonSaga} from '../sagas/getPokemonSaga'
import pokemonsReducer from '../features/getPokemons/pokemonsSlice'
import {fetchPokemonsSaga} from '../sagas/getPokemonsSaga'
import pokemonOneReducer from '../features/getOnePokemon/pokemonOneSlice'
import {getPokemonsInfoSaga} from '../sagas/getPokemonsInfoSaga'
/* 
 

import { authReducer } from '../features/auth'; 
import { singUpSaga } from '../sagas/signUpSaga';
import { verifyReducer } from '../features/verify';
import { verifySaga } from '../sagas/verifySagas' ;
import { loginReducer } from '../features/login';
import { signInSaga } from '../sagas/signInSaga';
import { UserInfoSaga } from '../sagas/userInfoSagas';
import { userInfoReducer } from '../features/userInfo'; */

const SagaMiddleware = createSagaMiddleware()

export const store = configureStore ({
    reducer: {
        theme: themeReducer,
        pokemons: pokemonsReducer,
        onePokemon: pokemonOneReducer
        /* ,
        auth: authReducer,
        verify: verifyReducer,
        login: loginReducer,
        userInfo: userInfoReducer, */
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(SagaMiddleware)
    }
})

/* 

SagaMiddleware.run(singUpSaga)
SagaMiddleware.run(verifySaga)
SagaMiddleware.run(signInSaga)
SagaMiddleware.run(UserInfoSaga) */
SagaMiddleware.run(fetchPokemonSaga)
SagaMiddleware.run(fetchPokemonsSaga)
SagaMiddleware.run(getPokemonsInfoSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch