import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkJoinRxjsComponent } from './fork-join-rxjs.component';

describe('ForkJoinRxjsComponent', () => {
  let component: ForkJoinRxjsComponent;
  let fixture: ComponentFixture<ForkJoinRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkJoinRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkJoinRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
