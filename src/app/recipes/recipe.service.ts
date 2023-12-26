import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipesChanged = new EventEmitter<Recipe[]>();
    
    private recipes: Recipe[] = [
        new Recipe('Classic Cheese Pizza', 'This is simply pizza', 'https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg', [
           new Ingredient('Cheese', 1),
           new Ingredient('Basil', 4),

        ] ),
        new Recipe('Poached Eggs with Red Wine Sauce','This is simply poached eggs','https://www.foodandwine.com/thmb/groHuXFcY3Z5kDiTLYOOFgYxa98=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/poached-eggs-with-red-wine-sauce-XL-RECIPE0918-6f8403636d1d4392813e013cf3be0571.jpg', [
            new Ingredient('Eggs', 2),
            new Ingredient('Red Wine Sauce', 1),
 
         ])
       
];

constructor(private slService: ShoppingListService){}

getRecipes() {
    return this.recipes.slice();
}

getRecipe(index: number) {
    return this.recipes[index];
}

addIngredientsToList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
}

addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.emit(this.recipes.slice())
}

updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.emit(this.recipes.slice())
}

deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.emit(this.recipes.slice())
}
}