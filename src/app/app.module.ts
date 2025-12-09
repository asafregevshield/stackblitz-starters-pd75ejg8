import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

// Register French locale data
registerLocaleData(localeFr);

export const options: any = {
  timezone: '+1000',
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ChildComponent],
  imports: [CommonModule, BrowserModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: options },
  ],
})
export class AppModule {}
