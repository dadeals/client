import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysMainComponent } from './toys-main.component';

describe('ToysMainComponent', () => {
  let component: ToysMainComponent;
  let fixture: ComponentFixture<ToysMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
