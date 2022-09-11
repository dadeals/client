import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsQuotesComponent } from './lists-quotes.component';

describe('ListsQuotesComponent', () => {
  let component: ListsQuotesComponent;
  let fixture: ComponentFixture<ListsQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
