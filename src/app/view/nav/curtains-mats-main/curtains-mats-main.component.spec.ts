import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainsMatsMainComponent } from './curtains-mats-main.component';

describe('CurtainsMatsMainComponent', () => {
  let component: CurtainsMatsMainComponent;
  let fixture: ComponentFixture<CurtainsMatsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurtainsMatsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtainsMatsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
