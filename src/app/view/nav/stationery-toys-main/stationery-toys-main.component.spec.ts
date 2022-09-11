import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryToysMainComponent } from './stationery-toys-main.component';

describe('StationeryToysMainComponent', () => {
  let component: StationeryToysMainComponent;
  let fixture: ComponentFixture<StationeryToysMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationeryToysMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryToysMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
