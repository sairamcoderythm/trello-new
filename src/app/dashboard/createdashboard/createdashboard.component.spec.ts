import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedashboardComponent } from './createdashboard.component';

describe('CreatedashboardComponent', () => {
  let component: CreatedashboardComponent;
  let fixture: ComponentFixture<CreatedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
