import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoModalComponent } from './consumo-modal.component';

describe('ConsumoModalComponent', () => {
  let component: ConsumoModalComponent;
  let fixture: ComponentFixture<ConsumoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
