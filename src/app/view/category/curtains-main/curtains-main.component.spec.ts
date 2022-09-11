import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainsMainComponent } from './curtains-main.component';

describe('CurtainsMainComponent', () => {
  let component: CurtainsMainComponent;
  let fixture: ComponentFixture<CurtainsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurtainsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtainsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
