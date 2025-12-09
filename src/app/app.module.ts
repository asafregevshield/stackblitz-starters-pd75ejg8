import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

// Register French locale data
registerLocaleData(localeFr);

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ChildComponent],
  imports: [CommonModule, BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class AppModule {}
