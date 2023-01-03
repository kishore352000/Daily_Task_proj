import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExaComponent } from './services-exa.component';

describe('ServicesExaComponent', () => {
  let component: ServicesExaComponent;
  let fixture: ComponentFixture<ServicesExaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesExaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
