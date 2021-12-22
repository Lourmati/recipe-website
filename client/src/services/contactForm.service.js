import httpService from './http.service';

class ContactFormService {
  constructor() {
    this.httpService = httpService;
  }

  /**
   * Soumet le formulaire de contact au serveur
   * @param {*} contactInfos informations du contact
   */
  async submitForm(contactInfos) {
    const contact = {
      name: contactInfos.name,
      email: contactInfos.email,
      message: contactInfos.message,
    };

    this.httpService.addNewContact(contact);
  }
}

const contactFormService = new ContactFormService();
export default contactFormService;
