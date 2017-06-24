import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelcontatosComponent } from './painelcontatos.component';

describe('PainelcontatosComponent', () => {
  let component: PainelcontatosComponent;
  let fixture: ComponentFixture<PainelcontatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelcontatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelcontatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
