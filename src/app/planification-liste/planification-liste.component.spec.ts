import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationListeComponent } from './planification-liste.component';

describe('PlanificationListeComponent', () => {
  let component: PlanificationListeComponent;
  let fixture: ComponentFixture<PlanificationListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanificationListeComponent]
    });
    fixture = TestBed.createComponent(PlanificationListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
