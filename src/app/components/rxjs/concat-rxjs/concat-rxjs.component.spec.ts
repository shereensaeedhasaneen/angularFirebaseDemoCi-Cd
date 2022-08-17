import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatRxjsComponent } from './concat-rxjs.component';

describe('ConcatRxjsComponent', () => {
  let component: ConcatRxjsComponent;
  let fixture: ComponentFixture<ConcatRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
