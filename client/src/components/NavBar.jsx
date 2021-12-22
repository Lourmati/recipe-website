import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <div className='header-container justify-container'>
        <div className='logo'>
          <a href='/'>
            <img alt='logo' src='img/logo.png' title='Accueil' />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='activeNav'>
                Accueil
              </NavLink>
            </li>
            {/* TODO : Ajouter des liens vers les pages /recettes, /ajouter_recette et /contact avec les bons titres */}
            <li>
              <NavLink to='/recettes' exact activeClassName='activeNav'>
                Trouver une recette
              </NavLink>
            </li>
            <li>
              <NavLink to='/ajouter_recette' exact activeClassName='activeNav'>
                Ajouter une recette
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' exact activeClassName='activeNav'>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
