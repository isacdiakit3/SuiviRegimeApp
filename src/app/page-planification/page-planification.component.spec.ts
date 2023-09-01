import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanificationComponent } from './page-planification.component';

describe('PagePlanificationComponent', () => {
  let component: PagePlanificationComponent;
  let fixture: ComponentFixture<PagePlanificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePlanificationComponent]
    });
    fixture = TestBed.createComponent(PagePlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
