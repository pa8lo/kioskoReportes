import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoLabelComponent } from './consumo-label.component';

describe('ConsumoLabelComponent', () => {
  let component: ConsumoLabelComponent;
  let fixture: ComponentFixture<ConsumoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
