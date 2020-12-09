import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosPorDiaComponent } from './ingresos-por-dia.component';

describe('IngresosPorDiaComponent', () => {
  let component: IngresosPorDiaComponent;
  let fixture: ComponentFixture<IngresosPorDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosPorDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosPorDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
