import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <div className='recette'>
      {/* TODO : Configurer le lien dynamique en fonction de l'attribut id de la recette */}
      <NavLink className='recette-link' to={`/recette?id=${recipe.id}`}>
        <h2>{recipe.nom}</h2>
        <img alt={recipe.nom} src={recipe.img} />
        <p className='time'>
          <FontAwesomeIcon icon={faClock} /> {recipe.temps} minutes
        </p>
      </NavLink>
    </div>
  );
}
