import React from 'react';
import categories from '../utils/categories';

export default function CategoryButtonGroup({ selectedCategory, handleClick }) {
  const getClassName = (categoryId) => {
    if (!categoryId && !selectedCategory) return 'selected';
    return categoryId === selectedCategory ? 'selected' : '';
  };

  return (
    <div className='btn-group' id='recettes-filtres'>
      {categories.map((category) => (
        <button
          key={category.id}
          type='button'
          onClick={() => handleClick(category.id)}
          className={getClassName(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
