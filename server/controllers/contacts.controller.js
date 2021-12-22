const contactsRouter = require('express').Router();
const { HTTP_STATUS } = require('../utils/http');
const { ContactsService } = require('../services/contacts.service');

class ContactsController {
  constructor() {
    this.contactsService = new ContactsService();
    this.router = contactsRouter;
    this.configureRouter();
  }

  /**
   * Configurer toutes les routes pour les contacts lors de l'initialisation
   */
  configureRouter() {
    /**
     * @returns tous les conatcts sauvegardées
     */
    this.router.get('/', async (req, res) => {
      const contacts = await this.contactsService.getAllContacts();
      res.json(contacts);
    });

    /**
     * Ajouter le nouveau contact dans la BD
     */
    this.router.post('/', async (req, res) => {
      try {
        if (!Object.keys(req.body).length) {
          res.status(HTTP_STATUS.BAD_REQUEST).send();
          return;
        }
        const newContact = req.body;
        await this.contactsService.addNewContact(newContact);
        res.status(HTTP_STATUS.CREATED).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });

    /**
     * Supprimer un contact spécifique selon un id
     */
    this.router.delete('/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const deletedElement = await this.contactsService.deleteContactById(id);
        const status = deletedElement.value ? HTTP_STATUS.NO_CONTENT : HTTP_STATUS.NOT_FOUND;
        res.status(status).send();
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    });
  }
}

module.exports = { ContactsController };
