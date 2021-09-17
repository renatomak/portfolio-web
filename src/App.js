import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Header from './pages/components/Header';
import Contato from './pages/Contato';
import Curriculo from './pages/Curriculo';
import Portfolio from './pages/Portfolio';
import GlobalStyle, { MainContainer } from './styleGlobal';
import './colors.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <MainContainer>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contato' component={Contato} />
        <Route path='/curriculo' component={Curriculo} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
              
      </MainContainer>
    </Router>
  );
}

export default App;
