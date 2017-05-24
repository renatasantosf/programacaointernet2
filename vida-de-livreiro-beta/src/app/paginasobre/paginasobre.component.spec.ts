import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasobreComponent } from './paginasobre.component';

describe('PaginasobreComponent', () => {
  let component: PaginasobreComponent;
  let fixture: ComponentFixture<PaginasobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginasobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
