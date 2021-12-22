import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function AdminContact({ contact, handleDelete }) {
  return (
    <div className='section-contacts-item section-item' data-id={contact.id}>
      <div className='section-header'>
        <p className='section-contact-name'>{contact.name}</p>
        <small>{contact.email}</small>
      </div>
      <p className='section-contact-message'>{contact.message}</p>
      {/* TODO : gérer l'événement onClick qui supprime un contact en fonction de son id */}
      <button
        type='button'
        className='btn section-trash-icon'
        data-id={contact.id}
        onClick={() => handleDelete(contact.id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
