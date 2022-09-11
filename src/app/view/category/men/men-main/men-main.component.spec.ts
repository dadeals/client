import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenMainComponent } from './men-main.component';

describe('MenMainComponent', () => {
  let component: MenMainComponent;
  let fixture: ComponentFixture<MenMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
