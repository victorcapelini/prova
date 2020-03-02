import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConsultaModel } from '../Model/ConsultaModel';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  salvarConsulta(consulta: ConsultaModel) {
    debugger
    return this.http.post<ConsultaModel>(API + 'Consulta/AdicionarConsulta', consulta);
  }
}
