import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConsultaModel, IConsultaModel, IConsultaRequest } from '../Model/ConsultaModel';
import { Page } from '../Model/Page';
import { Observable } from 'rxjs';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  salvarConsulta(consulta: ConsultaModel) {
    return this.http.post<ConsultaModel>(API + 'Consulta/AdicionarConsulta', consulta);
  }

  obterListaConsulta(pagina: Page): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', `${pagina.pageNumber}`)
      .set('pageSize', `${pagina.size}`)
      .set('descricao', `${pagina.descricao}`)
    return this.http.get(API + 'Consulta/ObterListaConsulta', { params });
  }

  editarConsulta(consulta: ConsultaModel) {
    return this.http.put<ConsultaModel>(API + 'Consulta/EditarConsulta', consulta);
  }

  obterConsultaPorId(id: string): Observable<IConsultaRequest> {
    return this.http.get<IConsultaRequest>(API + 'Consulta/ObterConsultaPorCodigo/'+id);
  }

  apagarConsulta(id: string): Observable<any> {
    return this.http.delete(API + 'Consulta/ApagarConsulta/'+id);
  }
}
