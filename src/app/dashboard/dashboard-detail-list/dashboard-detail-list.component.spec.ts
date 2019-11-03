import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailListComponent } from './dashboard-detail-list.component';

describe('DashboardDetailListComponent', () => {
  let component: DashboardDetailListComponent;
  let fixture: ComponentFixture<DashboardDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
