import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPedidosComponent } from './formulario-pedidos.component';

describe('FormularioPedidosComponent', () => {
  let component: FormularioPedidosComponent;
  let fixture: ComponentFixture<FormularioPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
