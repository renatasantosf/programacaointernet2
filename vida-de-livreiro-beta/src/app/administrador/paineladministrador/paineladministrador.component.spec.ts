import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaineladministradorComponent } from './paineladministrador.component';

describe('PaineladministradorComponent', () => {
  let component: PaineladministradorComponent;
  let fixture: ComponentFixture<PaineladministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaineladministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaineladministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
