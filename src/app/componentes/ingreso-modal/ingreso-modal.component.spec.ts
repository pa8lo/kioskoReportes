import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoModalComponent } from './ingreso-modal.component';

describe('IngresoModalComponent', () => {
  let component: IngresoModalComponent;
  let fixture: ComponentFixture<IngresoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
