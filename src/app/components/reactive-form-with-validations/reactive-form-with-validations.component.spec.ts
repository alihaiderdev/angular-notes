import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithValidationsComponent } from './reactive-form-with-validations.component';

describe('ReactiveFormWithValidationsComponent', () => {
  let component: ReactiveFormWithValidationsComponent;
  let fixture: ComponentFixture<ReactiveFormWithValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormWithValidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormWithValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
