import React from 'react';

export default function IngredientSearchBar(props) {
  const { handleSubmit, handleChange, value, exactMatch, handleMatchChange } = props;

  // TODO : gérer l'événement onSubmit du formulaire
  return (
    <form onSubmit={() => handleSubmit(value)} action='#' id='search-form'>
      <div className='search-group'>
        <input type='search' value={value} onChange={(e) => handleChange(e.target.value)} id='search-bar' />
        <input className='btn' id='search' type='submit' value='Rechercher' />
      </div>
      <div className='search-group'>
        <h3>Match exact</h3>
        <label className='switch' htmlFor='match'>
          {/* TODO : gérer l'événement onChange qui modifie l'état de la variable exactMatch */}
          {/* TODO : gérer l'état de selection l'input en fonction de la variable exactMatch */}
          <input type='checkbox' id='match' checked={exactMatch} onChange={() => handleMatchChange()} />
          <span className='slider round' />
        </label>
      </div>
    </form>
  );
}
