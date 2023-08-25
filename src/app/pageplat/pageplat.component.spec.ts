import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageplatComponent } from './pageplat.component';

describe('PageplatComponent', () => {
  let component: PageplatComponent;
  let fixture: ComponentFixture<PageplatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageplatComponent]
    });
    fixture = TestBed.createComponent(PageplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
