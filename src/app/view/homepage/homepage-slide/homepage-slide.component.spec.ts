import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSlideComponent } from './homepage-slide.component';

describe('HomepageSlideComponent', () => {
  let component: HomepageSlideComponent;
  let fixture: ComponentFixture<HomepageSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
