import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaUsaComponent } from './india-usa.component';

describe('IndiaUsaComponent', () => {
  let component: IndiaUsaComponent;
  let fixture: ComponentFixture<IndiaUsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiaUsaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiaUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
