import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/components/Header';
import Curriculum from './pages/Curriculum';
import Portfolio from './pages/Portfolio';
import GlobalStyle, { MainContainer } from './styleGlobal';
import './colors.css';
import Contact from './pages/Contact';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/curriculum" render={() => <Curriculum />} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
);

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Routes />
      </MainContainer>
    </Router>
  );
}

export default App;
