import {Component, OnInit} from '@angular/core';
import {Device} from "../../models/Device";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
import {DevicesService} from "../../services/devices.service";

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {
  device!: Device;
  device_id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private devicesService: DevicesService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.device_id = param.get('id')!;
      this.devicesService.getDevice(this.device_id).subscribe(dev => this.device = dev!);
    });
  }

}
