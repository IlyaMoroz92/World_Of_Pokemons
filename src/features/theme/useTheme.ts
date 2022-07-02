import { setTheme } from './themeSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const useTheme = () => {
    const theme = useAppSelector(state => state.theme.value)
    const dispatch = useAppDispatch()
    
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        dispatch(setTheme(newTheme))
    }

    return {
        theme,
        toggleTheme,
    }
}