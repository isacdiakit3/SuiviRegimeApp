import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPlatComponent } from './header-plat.component';

describe('HeaderPlatComponent', () => {
  let component: HeaderPlatComponent;
  let fixture: ComponentFixture<HeaderPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPlatComponent]
    });
    fixture = TestBed.createComponent(HeaderPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
