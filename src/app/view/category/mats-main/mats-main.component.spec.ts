import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsMainComponent } from './mats-main.component';

describe('MatsMainComponent', () => {
  let component: MatsMainComponent;
  let fixture: ComponentFixture<MatsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
