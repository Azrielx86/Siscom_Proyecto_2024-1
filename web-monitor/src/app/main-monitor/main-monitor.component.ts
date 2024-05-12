import {Component, OnInit} from '@angular/core';
import {Period} from "../typings/Period";
import {DevicesService} from "../services/devices.service";
import {Device, Measures} from "../models/Device";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-monitor',
  templateUrl: './main-monitor.component.html',
  styleUrls: ['./main-monitor.component.css']
})
export class MainMonitorComponent implements OnInit {
  selectedPeriod: string = "";
  devices: Device[] = [];

  constructor(private devicesService: DevicesService) {
  }

  ngOnInit(): void {
    this.devicesService.getItems().subscribe(devices => {
      this.devices = devices
    });
  }

  changePeriod = (period: Period) => {
    console.log(`Changing to ${period}`);
    this.selectedPeriod = period;
  }

  protected readonly Period = Period;
  protected readonly JSON = JSON;
}
