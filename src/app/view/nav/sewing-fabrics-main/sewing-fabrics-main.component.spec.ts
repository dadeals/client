import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingFabricsMainComponent } from './sewing-fabrics-main.component';

describe('SewingFabricsMainComponent', () => {
  let component: SewingFabricsMainComponent;
  let fixture: ComponentFixture<SewingFabricsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SewingFabricsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingFabricsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
