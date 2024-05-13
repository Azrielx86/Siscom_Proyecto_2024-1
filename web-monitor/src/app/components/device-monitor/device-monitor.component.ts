import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Device, Measure} from "../../models/Device";
import {DevicesService} from "../../services/devices.service";
import {data} from "autoprefixer";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-device-monitor',
  templateUrl: './device-monitor.component.html',
  styleUrls: ['./device-monitor.component.css']
})
export class DeviceMonitorComponent implements OnInit {
  @Input() device!: Device;
  measuresObservable!: Observable<Measure[]>;
  temperature!: Observable<any[]>;
  humidity!: Observable<any[]>;
  measures: Measure[] = [];

  constructor(private db: DevicesService) {
  }

  ngOnInit(): void {
    this.measuresObservable = this.db.getDeviceMeasures(this.device.id);
    this.measuresObservable.subscribe(measures => {
      this.measures = measures;
    });
    this.temperature = this.measuresObservable.pipe(
      map(m => m.map(d => {
        return {date: d.formatedDate, value: d.temperature};
      }))
    );
    this.humidity = this.measuresObservable.pipe(
      map(m => m.map(d => {
        return {date: d.formatedDate, value: d.humidity};
      }))
    );
  }

  protected readonly data = data;
}
