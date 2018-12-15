import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { AddOrEditPatientComponent } from './add-or-edit-patient/add-or-edit-patient.component';
import {PatientsListComponent} from './patients-list/patients-list.component';

const childRoutes: Routes = [
    {
        path: '',
        component: PatientsComponent,
        children: [
            { path: '', redirectTo: 'patients', pathMatch: 'full' },
            { path: 'patients', component: PatientsListComponent },
            { path: 'patient-actions', component: AddOrEditPatientComponent },
            { path: 'detail-Patient', component: DetailPatientComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
