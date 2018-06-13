import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceComponentComponent } from './http-service-component.component';

describe('HttpServiceComponentComponent', () => {
  let component: HttpServiceComponentComponent;
  let fixture: ComponentFixture<HttpServiceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServiceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
