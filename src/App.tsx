
import './App.scss';
import { Button } from './components/Button'
import { ReactComponent as Pokeball } from './assets/img/pokeball.svg'
import { ReactComponent as Up} from './assets/img/Up.svg'

function App() {

  return (
    <div className="App">
      <Button
        className="with-icon"
        icon={<Up />}
      />
      <Button
        className="with-icon"
        icon={<Pokeball />}
      />
    </div>
  );
}

export default App