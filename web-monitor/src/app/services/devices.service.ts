import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Device, Measures} from "../models/Device";

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devicesCollection: AngularFirestoreCollection<Device>
  devices: Observable<Device[]> | undefined;

  constructor(private db: AngularFirestore) {
    this.devicesCollection = this.db.collection('devices', ref => ref.orderBy('device_name', 'asc'));
  }

  getItems = (): Observable<Device[]> => {
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

  getDeviceMeasures = (device_id: string): Observable<Measures[]> => {
    const document = this.devicesCollection.doc<Device>(`${device_id}`);
    return document.collection('measures').snapshotChanges().pipe(
      map(action =>
        action.map(a =>
          a.payload.doc.data() as Measures
        )
      )
    );
  }
}
