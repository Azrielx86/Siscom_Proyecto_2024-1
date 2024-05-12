import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Device, Measures} from "../models/Device";
import {DevicesService} from "../services/devices.service";

@Component({
  selector: 'app-device-monitor',
  templateUrl: './device-monitor.component.html',
  styleUrls: ['./device-monitor.component.css']
})
export class DeviceMonitorComponent implements OnInit {
  @Input() device!: Device;
  measures: Measures[] = [];

  constructor(private db: DevicesService) {
  }

  ngOnInit(): void {
    this.db.getDeviceMeasures(this.device.id).subscribe(measures => {
      this.measures = measures;
    });
  }
}
