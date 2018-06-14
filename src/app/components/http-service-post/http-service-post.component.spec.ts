import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServicePostComponent } from './http-service-post.component';

describe('HttpServicePostComponent', () => {
  let component: HttpServicePostComponent;
  let fixture: ComponentFixture<HttpServicePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServicePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServicePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
