
import './App.scss';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Pokeball } from './components/Pokeball'
import {  Outlet } from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Burger } from './components/Burger';
import { useTheme } from './features/theme/useTheme'
import {  usePokeball } from './features/pokeball/usePokeball'
import {  useBurger } from './features/burger/useBurger'

function App() {
  const {theme} = useTheme()
  const {pokeball} = usePokeball()
  const {burger} = useBurger()

  return (
    <div className='App'>
      <div className="header">
        <Header/>
        </div>
      <div className={`content theme--${theme}`}>
        <div className='all__wrapper'>
          <Pokeball className={pokeball}/>
          <Burger className={burger}/>
          <Tabs/>
          <Outlet/>
        </div>
      </div>
      <div className="footer"> 
        <Footer/>
      </div>
    </div>
  );
}

export default App