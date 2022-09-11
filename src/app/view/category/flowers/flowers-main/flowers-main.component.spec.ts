import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersMainComponent } from './flowers-main.component';

describe('FlowersMainComponent', () => {
  let component: FlowersMainComponent;
  let fixture: ComponentFixture<FlowersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
