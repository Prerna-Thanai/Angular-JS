import { TestBed, inject } from '@angular/core/testing';

import { DisplayFavouritesService } from './display-favourites.service';

describe('DisplayFavouritesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayFavouritesService]
    });
  });

  it('should be created', inject([DisplayFavouritesService], (service: DisplayFavouritesService) => {
    expect(service).toBeTruthy();
  }));
});
