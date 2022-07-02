
import './App.scss';
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Picture } from './components/Picture'
import { Title } from './components/Title'
import { Likebar } from './components/Likebar'
import { Card } from './components/Card'
import { ReactComponent as Pokeball } from './assets/img/pokeball.svg'
import { ReactComponent as Up} from './assets/img/Up.svg'
import {  Outlet } from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { useTheme } from './features/theme/useTheme'
import { ReactComponent as Light} from '../src/assets/img/Light.svg'

function App() {
  
  const {theme} = useTheme()

  return (
    <div className='App' >
      <div className="header">
        <Header/>
        </div>
      <div className={`content theme--${theme}`}>
        <div className='all__wrapper'>
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