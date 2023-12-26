import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-recipe-list',
  templateUrl: './recipes-recipe-list.component.html',
  styleUrls: ['./recipes-recipe-list.component.css']
})
export class RecipesRecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  
  constructor(private recipeService:RecipeService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.recipeService.recipesChanged
    .subscribe((recipes: Recipe[] ) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
   }

   onNewRecipe(){
     this.router.navigate(['new'], {relativeTo: this.route} )
   }

  }


