import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch("http://localhost:3001")
    .then(res => res.json())
    .then(data => setRecipe(data));
  })

  const displayIngredients = (ingredient) => <li key={ingredient}>{ingredient}</li>


  if (!recipe){
    return null
  }

  return (
    <>
    <div className="App">
      <img src={recipe.image} alt={recipe.title}/>
      <article className="recipe">
      <h1 >{recipe.title}</h1>
      <ul id="recipe-details">
        <li>Prep time: {recipe.prepTime} minutes</li>
        <li>Cook time: {recipe.cookTime} minutes</li>
        <li>Serves {recipe.serves}</li>
      </ul>
      </article>
      </div>
      <div className="App">
      <article className="ingredients">
        <h1>Ingredients</h1>
        <ul id="ingredients">
          {recipe.ingredients.map(displayIngredients)}
        </ul>
      </article>
      </div>
      </>
  );
}

export default App;
