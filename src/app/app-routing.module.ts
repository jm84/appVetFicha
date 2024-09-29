import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteDialogComponent } from './paciente-dialog/paciente-dialog.component';

const routes: Routes = [
  { path: 'patient', component: PacienteDialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
