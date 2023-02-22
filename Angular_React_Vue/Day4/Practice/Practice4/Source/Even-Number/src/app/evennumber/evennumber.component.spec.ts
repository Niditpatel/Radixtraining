import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvennumberComponent } from './evennumber.component';

describe('EvennumberComponent', () => {
  let component: EvennumberComponent;
  let fixture: ComponentFixture<EvennumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvennumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvennumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  