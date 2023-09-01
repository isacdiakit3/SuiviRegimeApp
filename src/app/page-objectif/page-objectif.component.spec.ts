import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageObjectifComponent } from './page-objectif.component';

describe('PageObjectifComponent', () => {
  let component: PageObjectifComponent;
  let fixture: ComponentFixture<PageObjectifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageObjectifComponent]
    });
    fixture = TestBed.createComponent(PageObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
