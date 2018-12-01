import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipesService {
  recipeEvent = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Biryani',
      'briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent.',
      'http://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg'
    ),
    new Recipe(
      'sushi',
      'Sushi is a Japanese dish of specially',
      'https://peasandcrayons.com/wp-content/uploads/2012/10/homemade-sushi-tutorial-recipe-peas-and-crayons-1250.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
