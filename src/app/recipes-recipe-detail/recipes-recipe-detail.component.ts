import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-recipe-detail',
  templateUrl: './recipes-recipe-detail.component.html',
  styleUrls: ['./recipes-recipe-detail.component.css']
})
export class RecipesRecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;


  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }
    


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
       this.id = +params['id'];
       this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
      
  }

  onAddShoppingList(){
    this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], { relativeTo: this.route});

  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
