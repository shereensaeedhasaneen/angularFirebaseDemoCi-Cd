import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFormTestComponent } from './formly-form-test.component';

describe('FormlyFormTestComponent', () => {
  let component: FormlyFormTestComponent;
  let fixture: ComponentFixture<FormlyFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyFormTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
