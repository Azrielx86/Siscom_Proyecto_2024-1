import {Component, OnInit} from '@angular/core';
import {Period} from "../../typings/Period";
import {DevicesService} from "../../services/devices.service";
import {Device, Measures} from "../../models/Device";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-monitor',
  templateUrl: './main-monitor.component.html',
  styleUrls: ['./main-monitor.component.css']
})
export class MainMonitorComponent implements OnInit {
  selectedPeriod: string = "";
  devices: Device[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private devicesService: DevicesService
  ) {
  }

  ngOnInit(): void {
    this.devicesService.getDevices().subscribe(devices => {
      this.devices = devices
    });
  }

  changePeriod = (period: Period) => {
    console.log(`Changing to ${period}`);
    this.selectedPeriod = period;
  }

  goToDevice = async (device: Device) => {
    const device_id = device ? device.id : null;
    await this.router.navigate(['/device', {id: device_id}]);
  }

  protected readonly Period = Period;
  protected readonly JSON = JSON;
}
