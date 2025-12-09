import { Component, inject, OnInit } from '@angular/core';
import { TimezoneService } from '../timezone';
import { options } from '../app.module';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  timezoneService = inject(TimezoneService);

  childDateVal = new Date();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('onClick');
    options.timezone = '+1300';
    this.timezoneService.trigger.next();
  }

}