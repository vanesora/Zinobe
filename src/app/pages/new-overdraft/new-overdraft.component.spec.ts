import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOverdraftComponent } from './new-overdraft.component';

describe('NewOverdraftComponent', () => {
  let component: NewOverdraftComponent;
  let fixture: ComponentFixture<NewOverdraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOverdraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOverdraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
