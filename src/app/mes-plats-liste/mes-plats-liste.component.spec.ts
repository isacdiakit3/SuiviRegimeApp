import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPlatsListeComponent } from './mes-plats-liste.component';

describe('MesPlatsListeComponent', () => {
  let component: MesPlatsListeComponent;
  let fixture: ComponentFixture<MesPlatsListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesPlatsListeComponent]
    });
    fixture = TestBed.createComponent(MesPlatsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
