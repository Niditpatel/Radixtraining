import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecificComponent } from './pecific.component';

describe('PecificComponent', () => {
  let component: PecificComponent;
  let fixture: ComponentFixture<PecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecificComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
