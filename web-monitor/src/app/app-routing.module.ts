import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMonitorComponent} from "./pages/main-monitor/main-monitor.component";
import {DevicePageComponent} from "./pages/device-page/device-page.component";

const routes: Routes = [
  {path: "", component: MainMonitorComponent},
  {path: "device", component: DevicePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
