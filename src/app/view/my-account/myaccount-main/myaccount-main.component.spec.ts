import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountMainComponent } from './myaccount-main.component';

describe('MyaccountMainComponent', () => {
  let component: MyaccountMainComponent;
  let fixture: ComponentFixture<MyaccountMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
