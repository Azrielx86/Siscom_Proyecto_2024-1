import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMonitorComponent } from './pages/main-monitor/main-monitor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {DevicesService} from "./services/devices.service";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { DeviceMonitorComponent } from './components/device-monitor/device-monitor.component';
import { DevicePageComponent } from './pages/device-page/device-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMonitorComponent,
    DashboardComponent,
    DeviceMonitorComponent,
    DevicePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [DevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
