import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournallComponent } from './journall.component';

describe('JournallComponent', () => {
  let component: JournallComponent;
  let fixture: ComponentFixture<JournallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JournallComponent]
    });
    fixture = TestBed.createComponent(JournallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
