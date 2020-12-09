import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectivoLabelComponent } from './efectivo-label.component';

describe('EfectivoLabelComponent', () => {
  let component: EfectivoLabelComponent;
  let fixture: ComponentFixture<EfectivoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfectivoLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfectivoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
