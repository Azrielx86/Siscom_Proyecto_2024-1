import {Component, OnInit} from '@angular/core';
import {Device} from "../../models/Device";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {DevicesService} from "../../services/devices.service";
import {TriggersService} from "../../services/triggers.service";
import {Trigger} from "../../models/Trigger";

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {
  device!: Observable<Device | undefined>;
  triggers: Trigger | undefined;
  device_id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private devicesService: DevicesService,
    private triggersService: TriggersService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.device_id = param.get('id')!;
      this.device = this.devicesService.getDevice(this.device_id);
      this.triggersService.getTriggers(this.device_id).subscribe(t => {
        this.triggers = t ?? undefined;
      })
    });

  }

}
