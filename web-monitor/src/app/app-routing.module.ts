import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMonitorComponent} from "./main-monitor/main-monitor.component";

const routes: Routes = [
  {path: "", component: MainMonitorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
