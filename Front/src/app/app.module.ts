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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './util/MyHttpInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultaFormComponent } from './consultas/consulta-form/consulta-form.component';
import { EditarConsultaComponent } from './consultas/editar-consulta/editar-consulta.component';
import { LoadingInterceptorService } from './util/LoadingInterceptorService';
import { LoadingComponent } from './core/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConsultasComponent,
    IncluirConsultaComponent,
    ConsultaFormComponent,
    EditarConsultaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
