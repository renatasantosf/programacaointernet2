import { TestBed, inject } from '@angular/core/testing';

import { ParceirosService } from './parceiros.service';

describe('ParceirosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParceirosService]
    });
  });

  it('should ...', inject([ParceirosService], (service: ParceirosService) => {
    expect(service).toBeTruthy();
  }));
});
