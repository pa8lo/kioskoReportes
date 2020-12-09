import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoPorTipoLabelComponent } from './gasto-por-tipo-label.component';

describe('GastoPorTipoLabelComponent', () => {
  let component: GastoPorTipoLabelComponent;
  let fixture: ComponentFixture<GastoPorTipoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoPorTipoLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoPorTipoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
