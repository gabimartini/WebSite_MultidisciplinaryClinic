import React from 'react';
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Layout from './Content/Layout'


function App() {
  return (
    <div>
<Layout>
   <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Sobre" component={About} />
      <Route path="/Contato" component={Contact} />
    </Switch>
  </Layout>
    </div>
    
  );
}

export default App;
