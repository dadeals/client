import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricsMainComponent } from './fabrics-main.component';

describe('FabricsMainComponent', () => {
  let component: FabricsMainComponent;
  let fixture: ComponentFixture<FabricsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
