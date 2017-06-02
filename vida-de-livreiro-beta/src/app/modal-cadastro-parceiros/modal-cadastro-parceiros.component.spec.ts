import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroParceirosComponent } from './modal-cadastro-parceiros.component';

describe('ModalCadastroParceirosComponent', () => {
  let component: ModalCadastroParceirosComponent;
  let fixture: ComponentFixture<ModalCadastroParceirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCadastroParceirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastroParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
