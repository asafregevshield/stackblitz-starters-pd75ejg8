import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ChildComponent],
  imports: [CommonModule, BrowserModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ja-JP' }],
})
export class AppModule {}
