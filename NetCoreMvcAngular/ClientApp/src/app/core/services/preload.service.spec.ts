import { TestBed, inject } from '@angular/core/testing';

import { PreloadService } from './preload.service';

describe('PreloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloadService]
    });
  });

  it('should be created', inject([PreloadService], (service: PreloadService) => {
    expect(service).toBeTruthy();
  }));
});
