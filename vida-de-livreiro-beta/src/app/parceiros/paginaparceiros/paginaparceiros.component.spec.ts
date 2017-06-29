import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaparceirosComponent } from './paginaparceiros.component';

describe('PaginaparceirosComponent', () => {
  let component: PaginaparceirosComponent;
  let fixture: ComponentFixture<PaginaparceirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaparceirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaparceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
