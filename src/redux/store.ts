import { configureStore } from "@reduxjs/toolkit"
import themeReducer from '../features/theme/themeSlice'
import pokeballReducer from '../features/pokeball/pokeballSlice'
import createSagaMiddleware from "@redux-saga/core"
import {fetchPokemonSaga} from '../sagas/getPokemonSaga'
import pokemonsReducer from '../features/getPokemons/pokemonsSlice'
import {fetchPokemonsSaga} from '../sagas/getPokemonsSaga'
import pokemonOneReducer from '../features/getOnePokemon/pokemonOneSlice'
import {getPokemonsInfoSaga} from '../sagas/getPokemonsInfoSaga'
import { loginReducer } from '../features/login'
import { signInSaga } from '../sagas/signInSaga'
import { singUpSaga } from '../sagas/signUpSaga'
import { authReducer } from '../features/auth'
import { UserInfoSaga } from '../sagas/userInfoSaga'
import { userInfoReducer } from '../features/userInfo'
import { verifyReducer } from '../features/verify'
import { verifySaga } from '../sagas/verifySaga'


const SagaMiddleware = createSagaMiddleware()

export const store = configureStore ({
    reducer: {
        theme: themeReducer,
        pokeball: pokeballReducer,
        pokemons: pokemonsReducer,
        onePokemon: pokemonOneReducer,
        login: loginReducer,
        auth: authReducer,
        userInfo: userInfoReducer,
        verify: verifyReducer,

    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(SagaMiddleware)
    }
})

SagaMiddleware.run(verifySaga)
SagaMiddleware.run(UserInfoSaga)
SagaMiddleware.run(singUpSaga)
SagaMiddleware.run(signInSaga)
SagaMiddleware.run(fetchPokemonSaga)
SagaMiddleware.run(fetchPokemonsSaga)
SagaMiddleware.run(getPokemonsInfoSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch