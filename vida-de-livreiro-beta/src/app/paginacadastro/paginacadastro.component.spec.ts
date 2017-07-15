import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacadastroComponent } from './paginacadastro.component';

describe('PaginacadastroComponent', () => {
  let component: PaginacadastroComponent;
  let fixture: ComponentFixture<PaginacadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginacadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
