import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaEsquecidaComponent } from './senha-esquecida.component';

describe('SenhaEsquecidaComponent', () => {
  let component: SenhaEsquecidaComponent;
  let fixture: ComponentFixture<SenhaEsquecidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaEsquecidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaEsquecidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
