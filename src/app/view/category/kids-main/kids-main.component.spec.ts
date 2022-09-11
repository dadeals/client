import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsMainComponent } from './kids-main.component';

describe('KidsMainComponent', () => {
  let component: KidsMainComponent;
  let fixture: ComponentFixture<KidsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
