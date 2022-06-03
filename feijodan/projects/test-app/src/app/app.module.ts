import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeijodanNgxDataTableModule } from '@feijodan/ngx-data-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeijodanNgxDataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
