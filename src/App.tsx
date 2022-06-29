
import './App.scss';
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ReactComponent as Pokeball } from './assets/img/pokeball.svg'
import { ReactComponent as Up} from './assets/img/Up.svg'

function App() {
  
  return (
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div className="content">
        <Button
          className="with-icon"
          icon={<Up />}
        />
        <Button
          className="with-icon"
          icon={<Pokeball />}
        />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App