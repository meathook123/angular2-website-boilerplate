// angular modules
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { SharedModule } from '../shared.module'

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
  ]
})

export class MainModule {}
