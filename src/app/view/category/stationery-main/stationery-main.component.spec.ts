import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryMainComponent } from './stationery-main.component';

describe('StationeryMainComponent', () => {
  let component: StationeryMainComponent;
  let fixture: ComponentFixture<StationeryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationeryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
