const { dbService } = require('./database.service');
const defaultRecipes = require('../data/defaultRecipes.json');

const RECIPES_COLLECTION = 'recipes';

class RecipesService {
  constructor() {
    this.dbService = dbService;
  }

  /**
   * @returns la collection de recettes de la BD
   */
  get collection() {
    return this.dbService.db.collection(RECIPES_COLLECTION);
  }

  /**
   * TODO : Récupérer toutes les recettes de la collection
   * @returns les recettes de la collection
   */
  async getAllRecipes() {
    const recipes = await this.collection.find({}).toArray();
    return recipes;
  }

  /**
   * TODO : Récupérer une recette selon son id
   * @param {string} id : le id qui correspond à la recette que l'on cherche
   * @returns la recette correspondante
   */
  async getRecipeById(id) {
    const query = { id: Number(id) };
    const recipe = await this.collection.findOne(query);
    return recipe;
  }

  /**
   * TODO : Récupérer des recettes selon leur catégorie
   * @param {string} category : la catégorie qui correspond aux recettes que l'on cherche
   * @returns les recettes correspondantes
   */
  async getRecipesByCategory(category) {
    const query = { categorie: category };
    const recipes = await this.collection.find(query).toArray();
    return recipes;
  }

  /**
   * TODO : Récupérer des recette par ingrédient
   * @param {string} ingredient : nom de l'ingrédient à rechercher
   * @param {boolean} matchExact : cherche le nom exact d'ingrédient si true, sinon cherche un nom partiel
   * @returns les recettes trouvées ou un tableau vide
   */
  async getRecipesByIngredient(ingredient, matchExact) {
    let query = null;

    if (matchExact) {
      query = { ingredients: { $elemMatch: { nom: ingredient } } };
    } else {
      query = { ingredients: { $elemMatch: { nom: { $regex: ingredient } } } };
    }

    const recipes = this.collection.find(query).toArray();
    return recipes;
  }

  /**
   * TODO : Supprimer la recette de la collection en fonction de son id
   * @param {string} id : id de la recette à supprimer
   * @returns le résultat de la modification
   */
  async deleteRecipeById(id) {
    const filter = { id: Number(id) };
    const result = await this.collection.findOneAndDelete(filter);
    return result;
  }

  /**
   * TODO : Ajouter une recette à la liste des recettes
   * @param {*} recipe : la nouvelle recette à ajouter
   */
  async addNewRecipe(recipe) {
    const recipes = await this.getAllRecipes();
    // eslint-disable-next-line array-callback-return
    const ids = recipes.map((object) => {
      // eslint-disable-next-line no-unused-expressions
      object.id;
    });
    recipe.id = Math.max(...ids) + 1;
    await this.collection.insertOne(recipe);
  }

  /**
   * Réinitialiser les recettes en supprimant la collection puis en la repeuplant
   */
  async resetRecipes() {
    await this.collection.deleteMany({});
    this.populateDb();
  }

  /**
   * Remplir la collection avec les recettes par défaut
   */
  async populateDb() {
    await this.dbService.populateDb(RECIPES_COLLECTION, defaultRecipes.recettes);
  }
}

module.exports = { RecipesService };
