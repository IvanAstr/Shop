import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Header } from './components/header/header';
import { UseRouter } from './routes';
import { FooterComponent } from "./components/footer/footer";
function App() {

  const router = UseRouter();
  return (
    <div className="App">
        <Router>
          <Header/>
          
          {router}

          <FooterComponent/>
        </Router>

    </div>
  );
}

export default App;
