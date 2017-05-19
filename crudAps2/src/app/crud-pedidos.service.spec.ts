import { TestBed, inject } from '@angular/core/testing';

import { CrudPedidosService } from './crud-pedidos.service';

describe('CrudPedidosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudPedidosService]
    });
  });

  it('should be created', inject([CrudPedidosService], (service: CrudPedidosService) => {
    expect(service).toBeTruthy();
  }));
});
