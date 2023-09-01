import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesSinglePlatComponent } from './mes-single-plat.component';

describe('MesSinglePlatComponent', () => {
  let component: MesSinglePlatComponent;
  let fixture: ComponentFixture<MesSinglePlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesSinglePlatComponent]
    });
    fixture = TestBed.createComponent(MesSinglePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
