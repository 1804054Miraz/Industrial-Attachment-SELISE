import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicWorldCupFormComponent } from './dynamic-world-cup-form.component';

describe('DynamicWorldCupFormComponent', () => {
  let component: DynamicWorldCupFormComponent;
  let fixture: ComponentFixture<DynamicWorldCupFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicWorldCupFormComponent]
    });
    fixture = TestBed.createComponent(DynamicWorldCupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
