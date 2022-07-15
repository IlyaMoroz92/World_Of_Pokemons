import { setBurger } from './burgerSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const useBurger = () => {
    const burger = useAppSelector(state => state.burger.value)
    const dispatch = useAppDispatch()
    
    const toggleBurger = () => {
        const newBurger = burger === '' ? 'active' : ''
        dispatch(setBurger(newBurger))
    }

    const closeBurger = () => {
        const newBurger = ''
        dispatch(setBurger(newBurger))
    }

    return {
        burger,
        toggleBurger,
        closeBurger,
    }
}