import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

const swal = require('sweetalert');

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: any;

    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'ocp-apim-subscription-key': window["httpInterceptors"](),
      'user-latitude': window["browser-user-latitude"],
      'user-longitude': window["browser-user-longitude"],
      'user-accuracy': window["browser-user-accuracy"],
      'user-ip': window["browser-user-ip"],
      'device_id': window["browser-user-fingerprint"]
    });


    const cloneReq = req.clone({ headers });

    return next.handle(cloneReq).do(evt => {
      if (evt instanceof HttpResponse) {
        switch (evt.status) {
          case 200: {
            if (evt.body.success != undefined && !evt.body.success) {

              if (evt.body.statusCode == 500) {
                swal("Atenção", "Houve uma falha em nosso servidor. Por favor, aguarde alguns instantes e tente novamente. Se o problema persistir, entre em contato com o administrador.", 'warning');
              } else {
                swal("Atenção", evt.body.message, 'warning');
              }
            }
            break;
          }
          case 500: {
            swal("Atenção", "Houve uma falha em nosso servidor. Por favor, aguarde alguns instantes e tente novamente. Se o problema persistir, entre em contato com o administrador.", 'warning');
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