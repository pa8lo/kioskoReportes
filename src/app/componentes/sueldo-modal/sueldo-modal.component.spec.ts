import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SueldoModalComponent } from './sueldo-modal.component';

describe('SueldoModalComponent', () => {
  let component: SueldoModalComponent;
  let fixture: ComponentFixture<SueldoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SueldoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SueldoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
