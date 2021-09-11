import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzImageModule } from 'ng-zorro-antd/image';

import { SafePipe } from './pipes/safe.pipe';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';














@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzMessageModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzSpinModule,
    NzImageModule,
    NzDatePickerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
