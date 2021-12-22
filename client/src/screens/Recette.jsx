import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CheckList from '../components/CheckList';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';
import StepCard from '../components/StepCard';
import httpService from '../services/http.service';

export default function Recette() {
  const [recipe, setRecipe] = useState({
    nom: '',
    img: {},
    ingredients: [],
    outils: [],
    etapes: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const urlParams = new URLSearchParams(useLocation().search);
  const recipeId = urlParams.get('id');

  // TODO : Récupérer la recette du serveur pour modifier la variable recipe
  // et mettre la variable isLoading à false par la suite
  React.useEffect(async () => {
    setRecipe(await httpService.getRecipeByID(recipeId));
    setIsLoading(false);
  }, []);

  return (
    <>
      <NavBar />
      <main>
        {isLoading ? (
          <div className='loader-container'>
            <CircularProgress color='success' />
          </div>
        ) : (
          <article id='recette-article'>
            <h1 className='recette-header'>{recipe.nom}</h1>
            <button type='button' className='btn' onClick={window.print} id='print-btn'>
              Imprimer
            </button>
            <div className='row'>
              <div className='col'>
                <img className='recette-image' alt={recipe.nom} src={recipe.img} />
              </div>
              <div className='col'>
                <section>
                  <h2>Liste d'ingrédients</h2>
                  {/* TODO : Ajouter le component CheckList pour les ingrédients de la recette */}
                  {<CheckList values={recipe.ingredients} />}
                  <div />
                </section>
                <section>
                  <h2>Le nécessaire pour la cuisson</h2>
                  {/* TODO : Ajouter le component CheckList pour les outils de la recette */}
                  {<CheckList values={recipe.outils} />}
                  <div />
                </section>
              </div>
            </div>
            <h1>Les étapes à suivre pour une recette réussite!</h1>
            <div className='recette-container'>
              {/* TODO : Ajouter le component StepCard pour chaque étape de la recette */}
              {recipe.etapes.map((step) => (
                <StepCard step={step} />
              ))}
            </div>
          </article>
        )}
      </main>
      <PageFooter />
    </>
  );
}
