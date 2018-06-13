import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Event1TestComponent } from './event1-test.component';

describe('Event1TestComponent', () => {
  let component: Event1TestComponent;
  let fixture: ComponentFixture<Event1TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event1TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event1TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
