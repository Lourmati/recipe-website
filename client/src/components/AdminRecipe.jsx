import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function AdminRecipe({ recipe, handleDelete }) {
  return (
    <div className='section-recettes-item section-item' data-id={recipe.id}>
      <img alt='recette-img' src={recipe.img} className='section-img' />
      <p className='section-title'>{recipe.nom}</p>
      {/* TODO : gérer l'événement onClick qui supprime une recette en fonction de son id */}
      <button
        type='button'
        className='btn section-trash-icon'
        data-id={recipe.id}
        onClick={() => handleDelete(recipe.id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
