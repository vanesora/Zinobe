import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedsComponent } from './approveds.component';

describe('ApprovedsComponent', () => {
  let component: ApprovedsComponent;
  let fixture: ComponentFixture<ApprovedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
