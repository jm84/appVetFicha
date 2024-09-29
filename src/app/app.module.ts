import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteDialogComponent } from './paciente-dialog/paciente-dialog.component';
import { AnamnesisComponent } from './anamnesis/anamnesis.component';
import { MedicalPageComponent } from './medical-page/medical-page.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { FichaClinicaDialogComponent } from './ficha-clinica-dialog/ficha-clinica-dialog.component';
import { FichaClinicaDetailComponent } from './ficha-clinica-detail/ficha-clinica-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    PacienteDialogComponent,
    AnamnesisComponent,
    MedicalPageComponent,
    ConfirmDialogComponent,
    FichaClinicaComponent,
    FichaClinicaDialogComponent,
    FichaClinicaDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
