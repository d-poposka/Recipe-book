import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesRecipeDetailComponent } from './recipes-recipe-detail.component';

describe('RecipesRecipeDetailComponent', () => {
  let component: RecipesRecipeDetailComponent;
  let fixture: ComponentFixture<RecipesRecipeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesRecipeDetailComponent]
    });
    fixture = TestBed.createComponent(RecipesRecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
