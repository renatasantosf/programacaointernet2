import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaineladdpostagemComponent } from './paineladdpostagem.component';

describe('PaineladdpostagemComponent', () => {
  let component: PaineladdpostagemComponent;
  let fixture: ComponentFixture<PaineladdpostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaineladdpostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaineladdpostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
