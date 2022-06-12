import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FdnDataTableModule } from '../../../feijodan-ngx-data-table/src/lib/data-table/fdn-data-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FdnDataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
