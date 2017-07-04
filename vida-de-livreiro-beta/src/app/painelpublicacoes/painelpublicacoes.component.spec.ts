import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelpublicacoesComponent } from './painelpublicacoes.component';

describe('PainelpublicacoesComponent', () => {
  let component: PainelpublicacoesComponent;
  let fixture: ComponentFixture<PainelpublicacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelpublicacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelpublicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
