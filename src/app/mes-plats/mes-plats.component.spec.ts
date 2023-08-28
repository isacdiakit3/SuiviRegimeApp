import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPlatsComponent } from './mes-plats.component';

describe('MesPlatsComponent', () => {
  let component: MesPlatsComponent;
  let fixture: ComponentFixture<MesPlatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesPlatsComponent]
    });
    fixture = TestBed.createComponent(MesPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
