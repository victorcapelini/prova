import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import swal from 'sweetalert2'


@Injectable()

export class MyHttpInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: any;

    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });


    const cloneReq = req.clone({ headers });

    return next.handle(cloneReq).do(evt => {
      console.log(evt);
      if (evt instanceof HttpResponse) {
        switch (evt.status) {
          case 200: {
            if (evt.body.success != undefined && !evt.body.success) {
              if (evt.body.statusCode == 500) {
                swal.fire("Atenção", "Houve uma falha em nosso servidor. Por favor, aguarde alguns instantes e tente novamente. Se o problema persistir, entre em contato com o administrador.", 'warning');
              } else {
                swal.fire("Atenção", evt.body.message, 'warning');
              }
            }
            break;
          }
          case 500: {
            swal.fire("Atenção", "Houve uma falha em nosso servidor. Por favor, aguarde alguns instantes e tente novamente. Se o problema persistir, entre em contato com o administrador.", 'warning');
            break;
          }
          default: {
            break;
          }
        }

      }
    });
  }
}