import { Component, inject, OnInit, Injector } from '@angular/core';
import { DatePipe, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { TimezoneService } from '../timezone';
import { options } from '../app.module';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  timezoneService = inject(TimezoneService);
  parentInjector = inject(Injector);
  
  childDateVal = new Date();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('onClick');
    options.timezone = '+1300';
    this.rebuildInjector('+1300');
    this.timezoneService.trigger.next();
  }

  private rebuildInjector(timezone: string) {
    Injector.create({
      providers: [
        {
          provide: DATE_PIPE_DEFAULT_OPTIONS,
          useValue: { timezone }
        }
      ],
      parent: this.parentInjector
    });
  }
}