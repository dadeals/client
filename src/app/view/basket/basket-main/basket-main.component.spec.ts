import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketMainComponent } from './basket-main.component';

describe('BasketMainComponent', () => {
  let component: BasketMainComponent;
  let fixture: ComponentFixture<BasketMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
