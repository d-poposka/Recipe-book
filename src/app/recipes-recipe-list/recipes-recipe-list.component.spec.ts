import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesRecipeListComponent } from './recipes-recipe-list.component';

describe('RecipesRecipeListComponent', () => {
  let component: RecipesRecipeListComponent;
  let fixture: ComponentFixture<RecipesRecipeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesRecipeListComponent]
    });
    fixture = TestBed.createComponent(RecipesRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
