import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpService, HttpServiceInterceptor } from './_services/http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  // declare components
  declarations: [
  ],
  // provide services
  providers: [
    HttpService,
    HttpServiceInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpServiceInterceptor,
      multi: true
    }
  ],
  // entry component for dialogs
  entryComponents: [
  ],
  // need to export the imports and declarations
  exports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ]
})

export class SharedModule {}
