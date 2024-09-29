import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { FichaClinicaDetailComponent } from './ficha-clinica-detail/ficha-clinica-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/ficha-clinica', pathMatch: 'full' },
  { path: 'ficha-clinica', component: FichaClinicaComponent },
  { path: 'ficha-clinica/:id', component: FichaClinicaDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
