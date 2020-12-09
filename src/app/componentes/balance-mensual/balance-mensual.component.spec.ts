import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceMensualComponent } from './balance-mensual.component';

describe('BalanceMensualComponent', () => {
  let component: BalanceMensualComponent;
  let fixture: ComponentFixture<BalanceMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceMensualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
