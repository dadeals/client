import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeadsMainComponent } from './beads-main.component';

describe('BeadsMainComponent', () => {
  let component: BeadsMainComponent;
  let fixture: ComponentFixture<BeadsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeadsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeadsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
