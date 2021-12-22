import React from 'react';

export default function StepForm({ step, onChange }) {
  const imgRef = React.createRef();

  const handleChange = (event) => {
    const updatedStep = {
      ...step,
      [event.target.name]: event.target.name === 'img' ? event.target.files[0] : event.target.value,
    };
    onChange(updatedStep);
  };

  return (
    <fieldset className='form-control'>
      <legend>Étape #{step.order}</legend>

      <label htmlFor={`nom_etape_${step.order}`}>Nom de l'étape:</label>
      <input
        type='text'
        id={`nom_etape_${step.order}`}
        name='title'
        value={step.title}
        onChange={handleChange}
        required
      />

      {/* TODO : Compléter le code HTML pour l'input de description de l'étape */}
      <label htmlFor={`description_etape_${step.order}`}>Description de l'étape:</label>
      <input type='text' name='text' value={step.text} onChange={handleChange} required />

      {/* TODO : Compléter le code HTML pour l'input de l'image de l'étape */}
      <label htmlFor={`img_etape_${step.order}`}>Ajouter une image pour cette étape:</label>
      <input name='img' type='file' id='img' accept='image/*' ref={imgRef} onChange={handleChange} required />
    </fieldset>
  );
}
