import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';
import contactFormService from '../services/contactForm.service';

export default function Contact() {
  const [contactInfos, setContactInfos] = useState({
    name: '',
    email: '',
    message: '',
  });

  /**
   * Gère la modification du formulaire en modifiant l'état de la variable contactInfos
   * TODO : gérer la modification du formulaire et mettre à jour la variable contactInfos
   * @param {*} event
   */
  const handleChange = (event) => {
    const { value } = event.target;
    setContactInfos({ ...contactInfos, [event.target.name]: value });
  };

  /**
   * Transmet le formulaire au serveur et recharge la page pour vider le formulaire.
   * @param {*} event événement de soumission
   */
  const addContact = async (event) => {
    event.preventDefault();
    await contactFormService.submitForm(contactInfos);
    window.location.reload(false);
  };

  return (
    <>
      <NavBar />
      <main>
        <article>
          <h1>Contact</h1>
          <p>
            Contactez <em>Les recettes de Nikolay</em> via le formulaire suivant:
          </p>
          <form className='row form-group' onSubmit={addContact}>
            <fieldset className='form-control contact-control'>
              <legend>Envoyez-nous un message</legend>
              {/* TODO : gérer le changement du nom du Contact et l'événement onChange */}
              <label htmlFor='name'>Votre nom:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={contactInfos.name}
                onChange={(e) => handleChange(e)}
                required
              />
              {/* TODO : gérer le changement du courriel du Contact et l'événement onChange */}
              <label htmlFor='email'>Votre adresse courriel:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={contactInfos.email}
                onChange={(e) => handleChange(e)}
                required
              />

              {/* TODO : gérer le changement du message du Contact et l'événement onChange */}
              <label htmlFor='message'>Votre message</label>
              <textarea
                name='message'
                id='message'
                value={contactInfos.message}
                onChange={(e) => handleChange(e)}
                required
              />
            </fieldset>

            <input className='btn' type='submit' value='Envoyez le message' />
          </form>
        </article>
      </main>
      <PageFooter />
    </>
  );
}
