import { setPokeball } from './pokeballSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const usePokeball = () => {
    const pokeball = useAppSelector(state => state.pokeball.value)
    const dispatch = useAppDispatch()
    
    const togglePokeball = () => {
        const newPokeball = pokeball === '' ? 'active' : ''
        dispatch(setPokeball(newPokeball))
    }

    return {
        pokeball,
        togglePokeball,
    }
}