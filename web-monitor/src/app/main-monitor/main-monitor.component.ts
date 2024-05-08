import {Component, OnInit} from '@angular/core';
import {Period} from "../typings/Period";

@Component({
  selector: 'app-main-monitor',
  templateUrl: './main-monitor.component.html',
  styleUrls: ['./main-monitor.component.css']
})
export class MainMonitorComponent implements OnInit {
  selectedPeriod: string = "";
  constructor() {
  }

  ngOnInit(): void {
  }

  changePeriod = (period: Period) => {
    console.log(`Changing to ${period}`);
    this.selectedPeriod = period;
  }

  protected readonly Period = Period;
}
