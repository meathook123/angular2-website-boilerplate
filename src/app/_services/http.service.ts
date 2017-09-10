// customize http service with success and error handling and notification
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  get(url: string, filter?: any) {
    if (filter) {
      url = url + '?filter=' + encodeURIComponent(JSON.stringify(filter));
    }
    return this.httpClient.get(url);
  }

  put(url: string, data: any) {
    return this.httpClient.put(url, data);
  }

  post(url: string, data: any) {
    return this.httpClient.post(url, data);
  }

  delete(url: string, filter?: any) {
    if (filter) {
      url = url + '?filter=' + encodeURIComponent(JSON.stringify(filter));
    }
    return this.httpClient.delete(url);
  }
}

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (req.method !== 'GET') {
          this.onSuccess(event);
        }
        return event;
      }
    }).catch(err => {
      if (err instanceof HttpErrorResponse) {
        this.onError(err);
          return Observable.throw(err);
      }
    })
  }

  private onSuccess(res: HttpResponse<any>) {
    // on success notification
  }

  private onError(error: HttpErrorResponse) {
    // error handling
  }
}
