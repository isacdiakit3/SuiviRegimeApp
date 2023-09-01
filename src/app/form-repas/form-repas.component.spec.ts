import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepasComponent } from './form-repas.component';

describe('FormRepasComponent', () => {
  let component: FormRepasComponent;
  let fixture: ComponentFixture<FormRepasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRepasComponent]
    });
    fixture = TestBed.createComponent(FormRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
