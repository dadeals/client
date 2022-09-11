import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingMainComponent } from './sewing-main.component';

describe('SewingMainComponent', () => {
  let component: SewingMainComponent;
  let fixture: ComponentFixture<SewingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SewingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
