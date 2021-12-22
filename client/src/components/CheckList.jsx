import React from 'react';

export default function CheckList({ values }) {
  return (
    <ul className='check-list'>
      {values.map((value) => (
        <li key={value.nom || value}>
          <input id='input-list' type='checkbox' />
          <label htmlFor='input-list'>{value.nom ? `${value.quantite} ${value.nom}` : value}</label>
        </li>
      ))}
    </ul>
  );
}
