import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Device, Measure} from "../models/Device";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devicesCollection: AngularFirestoreCollection<Device>
  devices: Observable<Device[]> | undefined;

  constructor(private db: AngularFirestore) {
    this.devicesCollection = this.db.collection('devices', ref => ref.orderBy('device_name', 'asc'));
  }

  getDevices = (): Observable<Device[]> => {
    return this.devicesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Device;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    );
  }

  getDevice = (device_id: string): Observable<Device | undefined> => {
    const document = this.devicesCollection.doc<Device>(`${device_id}`)
    return document.snapshotChanges().pipe(
      map(action => {
        if (!action.payload.exists) return undefined;
        const data = action.payload.data() as Device;
        data.id = action.payload.id;
        return data;
      })
    );
  }

  getDeviceMeasures = (device_id: string): Observable<Measure[]> => {
    const document = this.devicesCollection.doc<Device>(`${device_id}`);

    let now = new Date(Date.now());
    now.setHours(now.getHours() - 1);

    console.log(now)

    return document.collection('measures',
      ref =>
        ref
          .where("date", ">=", now)
          .orderBy("date", "asc"))
          .snapshotChanges().pipe(
      map(action =>
        action.map(a => {
            const m = a.payload.doc.data() as Measure;
            m.formatedDate = m.date.toDate();
            return m;
          }
        )
      )
    );
  }
}
