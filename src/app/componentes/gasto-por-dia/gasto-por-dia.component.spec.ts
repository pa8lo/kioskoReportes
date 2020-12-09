import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoPorDiaComponent } from './gasto-por-dia.component';

describe('GastoPorDiaComponent', () => {
  let component: GastoPorDiaComponent;
  let fixture: ComponentFixture<GastoPorDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoPorDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoPorDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
