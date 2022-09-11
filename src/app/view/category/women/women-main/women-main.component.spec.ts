import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenMainComponent } from './women-main.component';

describe('WomenMainComponent', () => {
  let component: WomenMainComponent;
  let fixture: ComponentFixture<WomenMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
