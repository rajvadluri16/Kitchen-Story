import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetadminComponent } from './forgetadmin.component';

describe('ForgetadminComponent', () => {
  let component: ForgetadminComponent;
  let fixture: ComponentFixture<ForgetadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
