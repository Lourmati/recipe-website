import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';

export default function Erreur() {
  return (
    <>
      <NavBar />
      <main className='error-main'>
        <h1>Erreur 404</h1>
        <p>Page introuvable!</p>
        <NavLink className='btn' to='/'>
          {' '}
          Retourner à l'Accueil{' '}
        </NavLink>
      </main>
      <PageFooter />
    </>
  );
}
