import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHttpComponent } from './services-http.component';

describe('ServicesHttpComponent', () => {
  let component: ServicesHttpComponent;
  let fixture: ComponentFixture<ServicesHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
