import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
	API_KEY = 'AIzaSyDDZi2iIhTIW-MWoQ_0TYdtQt0RgBKBoZ4';
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiUrl = '';

    if (req.url.includes('&type=video')) {
      apiUrl = 'https://www.googleapis.com/youtube/v3/search?key=';
    } else {
      apiUrl = 'https://www.googleapis.com/youtube/v3/videos?key=';
    }

    const apiReq = req.clone({
      url: `${apiUrl}${this.API_KEY}${req.url}`
    });

    return next.handle(apiReq);
  }
}
