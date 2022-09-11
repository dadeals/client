import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeLivingMainComponent } from './home-living-main.component';

describe('HomeLivingMainComponent', () => {
  let component: HomeLivingMainComponent;
  let fixture: ComponentFixture<HomeLivingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLivingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLivingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
