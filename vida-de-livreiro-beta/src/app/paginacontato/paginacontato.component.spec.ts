import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacontatoComponent } from './paginacontato.component';

describe('PaginacontatoComponent', () => {
  let component: PaginacontatoComponent;
  let fixture: ComponentFixture<PaginacontatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginacontatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacontatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
