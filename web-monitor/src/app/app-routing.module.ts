import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMonitorComponent} from "./pages/main-monitor/main-monitor.component";
import {DevicePageComponent} from "./pages/device-page/device-page.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  {path: "", component: MainMonitorComponent},
  {path: "device", component: DevicePageComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
