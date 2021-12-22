import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';

export default function Accueil() {
  return (
    <>
      <NavBar />
      <main>
        <article className='justify-container'>
          <div>
            <h1>Le site n&deg;1 de recettes!</h1>
            <p>Découvrez nos différentes recettes</p>
            <NavLink className='btn' to='/recettes'>
              En savoir plus <i className='fa fa-angle-double-right' />
            </NavLink>
          </div>
          {/* Source img: https://www.meilleurduchef.com/fr/recette/pate-feuilletee.html */}
          <img alt='home' src='img/home.jpg' id='home-img' />
        </article>
      </main>
      <PageFooter />
    </>
  );
}
