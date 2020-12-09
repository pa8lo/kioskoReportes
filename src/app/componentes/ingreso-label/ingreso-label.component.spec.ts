import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoLabelComponent } from './ingreso-label.component';

describe('IngresoLabelComponent', () => {
  let component: IngresoLabelComponent;
  let fixture: ComponentFixture<IngresoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
