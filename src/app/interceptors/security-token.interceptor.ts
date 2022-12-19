import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecurityTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  // do whatever you want with request
    request = request.clone({
      setHeaders: {
        "Content-Type": "application/json",
         Authentication: 'token_008',

      }
  })
    return next.handle(request);
  }
}
