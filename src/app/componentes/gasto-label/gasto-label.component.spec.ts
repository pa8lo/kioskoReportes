import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoLabelComponent } from './gasto-label.component';

describe('GastoLabelComponent', () => {
  let component: GastoLabelComponent;
  let fixture: ComponentFixture<GastoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
