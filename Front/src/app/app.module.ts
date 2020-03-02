import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { IncluirConsultaComponent } from './consultas/incluir-consulta/incluir-consulta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConsultasComponent,
    IncluirConsultaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
