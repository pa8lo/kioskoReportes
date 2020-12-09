import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoLabelComponent } from './saldo-label.component';

describe('SaldoLabelComponent', () => {
  let component: SaldoLabelComponent;
  let fixture: ComponentFixture<SaldoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
