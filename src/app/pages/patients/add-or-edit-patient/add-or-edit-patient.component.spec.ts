import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditPatientComponent } from './add-or-edit-patient.component';

describe('AddOrEditPatientComponent', () => {
  let component: AddOrEditPatientComponent;
  let fixture: ComponentFixture<AddOrEditPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
