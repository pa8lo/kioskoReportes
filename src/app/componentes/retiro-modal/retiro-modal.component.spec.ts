import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroModalComponent } from './retiro-modal.component';

describe('RetiroModalComponent', () => {
  let component: RetiroModalComponent;
  let fixture: ComponentFixture<RetiroModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiroModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
