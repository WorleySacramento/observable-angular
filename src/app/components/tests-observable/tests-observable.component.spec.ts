import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsObservableComponent } from './tests-observable.component';

describe('TestsObservableComponent', () => {
  let component: TestsObservableComponent;
  let fixture: ComponentFixture<TestsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
