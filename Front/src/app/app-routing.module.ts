import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IncluirConsultaComponent } from './consultas/incluir-consulta/incluir-consulta.component';


const routes: Routes = [
  { path: 'incluir', component: IncluirConsultaComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
