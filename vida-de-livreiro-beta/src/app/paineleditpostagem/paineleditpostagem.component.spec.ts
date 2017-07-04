import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaineleditpostagemComponent } from './paineleditpostagem.component';

describe('PaineleditpostagemComponent', () => {
  let component: PaineleditpostagemComponent;
  let fixture: ComponentFixture<PaineleditpostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaineleditpostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaineleditpostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
