import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelcomentariosComponent } from './painelcomentarios.component';

describe('PainelcomentariosComponent', () => {
  let component: PainelcomentariosComponent;
  let fixture: ComponentFixture<PainelcomentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelcomentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelcomentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
