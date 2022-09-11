import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingShoesMainComponent } from './clothing-shoes-main.component';

describe('ClothingShoesMainComponent', () => {
  let component: ClothingShoesMainComponent;
  let fixture: ComponentFixture<ClothingShoesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingShoesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingShoesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
