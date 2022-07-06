
import './App.scss';
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Picture } from './components/Picture'
import { Title } from './components/Title'
import { Likebar } from './components/Likebar'
import { Card } from './components/Card'
import { Pokeball } from './components/Pokeball'
import {  Outlet } from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Burger } from './components/Burger';
import { useTheme } from './features/theme/useTheme'
import { ReactComponent as Light} from '../src/assets/img/Light.svg'
import {  usePokeball } from './features/pokeball/usePokeball'
import {  useBurger } from './features/burger/useBurger'
import { useEffect } from 'react';

function App() {
  const {theme} = useTheme()
  const {pokeball, togglePokeball} = usePokeball()
  const {burger, toggleBurger} = useBurger()




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