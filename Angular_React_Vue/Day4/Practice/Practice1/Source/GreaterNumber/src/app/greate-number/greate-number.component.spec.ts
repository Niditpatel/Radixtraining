import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreateNumberComponent } from './greate-number.component';

describe('GreateNumberComponent', () => {
  let component: GreateNumberComponent;
  let fixture: ComponentFixture<GreateNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreateNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreateNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
