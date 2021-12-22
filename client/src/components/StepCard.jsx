import React from 'react';

export default function StepCard({ step }) {
  return (
    <div className='etape-recette'>
      <img className='recette-image' alt={step.titre} src={step.image} />
      <h2>
        {step.ordre}. {step.titre}
      </h2>
      <p>{step.texte}</p>
    </div>
  );
}
