import { ChangeDetectorRef, Component, inject, VERSION } from '@angular/core';
import { TimezoneService } from './timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dateVal = new Date();
  

  timezoneService = inject(TimezoneService);
  cdr = inject(ChangeDetectorRef);

  constructor() {
    this.timezoneService.trigger.subscribe(() => {
      this.cdr.detectChanges();
    });
  }
}
