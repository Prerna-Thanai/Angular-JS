import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFavouritesComponent } from './display-favourites.component';

describe('DisplayFavouritesComponent', () => {
  let component: DisplayFavouritesComponent;
  let fixture: ComponentFixture<DisplayFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
