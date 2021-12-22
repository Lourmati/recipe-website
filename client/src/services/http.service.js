/* eslint-disable no-console */
const HTTPInterface = {
  SERVER_URL: 'http://localhost:5000/api',

  async GET(endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`);
    return response.json();
  },

  async POST(endpoint, data) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.status;
  },

  async DELETE(endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: 'DELETE',
    });
    return response.status;
  },

  async PATCH(endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: 'PATCH',
    });
    return response.status;
  },
};

class HTTPService {
  constructor() {
    this.recettes = [];
    this.contacts = [];
    this.recipesBaseURL = 'recettes';
    this.contactsBaseURL = 'contacts';
  }

  /**
   * Fait une requête GET à /api/recettes pour obtenir toutes les recettes
   * @returns
   */
  async fetchAllRecipes() {
    try {
      return await HTTPInterface.GET(`${this.recipesBaseURL}`);
    } catch (error) {
      return this.recettes;
    }
  }

  /**
   * Fait une requête GET à /api/contacts pour obtenir tous les messages de contact
   * @returns
   */
  async fetchAllContacts() {
    try {
      return await HTTPInterface.GET(`${this.contactsBaseURL}`);
    } catch (error) {
      return this.contacts;
    }
  }

  /**
   * Récupère une recette à travers son paramètre id
   * @param {*} id : le id qui correspond à la recette qu'on cherche
   * @returns la recette correspondante
   */
  async getRecipeByID(id) {
    return HTTPInterface.GET(`${this.recipesBaseURL}/${id}`);
  }

  /**
   * Fait une requête vers /recettes/category/:category
   * Filtre les recettes en fonction d'une catégorie et retourne le résultat
   * Si category est undefined ou null, toutes les recettes sont retournées
   * @param {string} category categorie de recette pour le filtre
   * @returns les recettes de la catégorie de recheche
   */
  async getRecipesByCategory(category) {
    if (!category) {
      return this.fetchAllRecipes();
    }

    try {
      return await HTTPInterface.GET(`${this.recipesBaseURL}/category/${category}`);
    } catch (error) {
      return this.recettes;
    }
  }

  /**
   * Fait une requête vers /recettes/ingredient/:ingredient?matchExact
   * Filtre les recettes en fonction d'un ingrédient et retourne le résultat
   * Le paramètre matchExact est passée comme paramètre de query s'il est vrai
   *
   * Ex : /recettes/ingredient/monIngredient?matchExact=true si le paramètre est à true
   * sinon : /recettes/ingredient/monIngredient
   * @param {string} ingredient ingrédient pour le filtre
   * @param {boolean} matchExact recherche exacte ou non pour l'ingrédient
   * @returns les recettes de la catégorie de recheche
   */
  async getRecipesByIngredients(ingredient, matchExact) {
    try {
      const matchExactString = matchExact ? `?matchExact=true` : '';
      return await HTTPInterface.GET(`${this.recipesBaseURL}/ingredient/${ingredient}${matchExactString}`);
    } catch (error) {
      return this.recettes;
    }
  }

  /**
   * Envoie la nouvelle recette au serveur pour la stocker dans la liste des recettes
   * @param {*} recette
   */
  async addNewRecipe(newRecipe) {
    try {
      await HTTPInterface.POST(`${this.recipesBaseURL}`, newRecipe);
    } catch (error) {
      console.log('An error occured while POSTING new recipe', error);
    }
  }

  /**
   * Fait une requête DELETE pour supprimer une recette identifiée par son id
   * @param {*} id: recette à supprimer
   */
  async deleteRecipe(id) {
    try {
      await HTTPInterface.DELETE(`${this.recipesBaseURL}/${id}`);
    } catch (error) {
      console.log('An error occured while DELETING recipe', error);
    }
  }

  /**
   * Envoie la nouvelle recette au serveur pour la stocker dans la liste des recettes
   * @param {*} contact
   */
  async addNewContact(newContact) {
    try {
      await HTTPInterface.POST(`${this.contactsBaseURL}`, newContact);
    } catch (error) {
      console.log('An error occured while POSTING new contact', error);
    }
  }

  /**
   * Fait une requête DELETE pour supprimer un contact identifié par son id
   * @param {*} id: contact à supprimer
   */
  async deleteContact(id) {
    try {
      await HTTPInterface.DELETE(`${this.contactsBaseURL}/${id}`);
    } catch (error) {
      console.log('An error occured while DELETING contact', error);
    }
  }

  /**
   * Fait une requête PATCH pour réinitialiser la liste des recettes
   */
  async resetRecipes() {
    try {
      await HTTPInterface.PATCH(`${this.recipesBaseURL}/admin/reset`);
    } catch (error) {
      console.log('An error has occured while reseting recipes', error);
    }
  }
}

const httpService = new HTTPService();
export default httpService;
