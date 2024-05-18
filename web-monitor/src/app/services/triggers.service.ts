import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {Trigger} from "../models/Trigger";

@Injectable({
  providedIn: 'root'
})
export class TriggersService {

  constructor(private db: AngularFireDatabase) { }

  getTriggers = (device_id: string): Observable<Trigger | null> => {
    return this.db.object<Trigger>(`/devices/${device_id}/triggers`).valueChanges();
  }
}
