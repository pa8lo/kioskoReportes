import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoModalComponent } from './gasto-modal.component';

describe('GastoModalComponent', () => {
  let component: GastoModalComponent;
  let fixture: ComponentFixture<GastoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
