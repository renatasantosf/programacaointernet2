import { TestBed, inject } from '@angular/core/testing';

import { PostagemecomentarioService } from './postagemecomentario.service';

describe('PostagemecomentarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostagemecomentarioService]
    });
  });

  it('should ...', inject([PostagemecomentarioService], (service: PostagemecomentarioService) => {
    expect(service).toBeTruthy();
  }));
});
