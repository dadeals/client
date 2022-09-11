import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersFunctionMainComponent } from './flowers-function-main.component';

describe('FlowersFunctionMainComponent', () => {
  let component: FlowersFunctionMainComponent;
  let fixture: ComponentFixture<FlowersFunctionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowersFunctionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersFunctionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
