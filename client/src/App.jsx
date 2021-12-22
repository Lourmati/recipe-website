import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from './screens/Accueil';
import Admin from './screens/Admin';
import AjouterRecette from './screens/AjouterRecette';
import Contact from './screens/Contact';
import Erreur from './screens/Erreur';
import Recette from './screens/Recette';
import Recettes from './screens/Recettes';
import './style.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Accueil} />
      <Route exact path='/recettes' component={Recettes} />
      <Route exact path='/recette' component={Recette} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/ajouter_recette' component={AjouterRecette} />
      <Route exact path='/admin' component={Admin} />
      <Route path='*' component={Erreur} />
    </Switch>
  );
}

export default App;
