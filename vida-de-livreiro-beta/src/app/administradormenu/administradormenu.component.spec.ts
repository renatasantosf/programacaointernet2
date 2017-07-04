import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradormenuComponent } from './administradormenu.component';

describe('AdministradormenuComponent', () => {
  let component: AdministradormenuComponent;
  let fixture: ComponentFixture<AdministradormenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradormenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradormenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
