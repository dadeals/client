import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeadsJewelleryMainComponent } from './beads-jewellery-main.component';

describe('BeadsJewelleryMainComponent', () => {
  let component: BeadsJewelleryMainComponent;
  let fixture: ComponentFixture<BeadsJewelleryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeadsJewelleryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeadsJewelleryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
