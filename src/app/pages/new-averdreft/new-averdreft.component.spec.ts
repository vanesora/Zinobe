import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAverdreftComponent } from './new-averdreft.component';

describe('NewAverdreftComponent', () => {
  let component: NewAverdreftComponent;
  let fixture: ComponentFixture<NewAverdreftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAverdreftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAverdreftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
