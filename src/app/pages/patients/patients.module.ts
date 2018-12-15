import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrEditPatientComponent } from './add-or-edit-patient/add-or-edit-patient.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { routing } from './patients.routing'
import { SharedModule } from '../../shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload';
import { SelectModule } from 'ng2-select';
import { PatientsListComponent } from './patients-list/patients-list.component';
import {PatientsComponent} from './patients.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    FileUploadModule,
    SelectModule
  ],
  declarations: [
    PatientsComponent,
    AddOrEditPatientComponent,
     DetailPatientComponent,
     PatientsListComponent
    ]
})
export class PatientsModule { }
