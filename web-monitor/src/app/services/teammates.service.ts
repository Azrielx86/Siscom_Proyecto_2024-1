import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";
import {Teammate} from "../models/Teammate";

@Injectable({
  providedIn: 'root'
})
export class TeammatesService {
  teammatesCollection: AngularFirestoreCollection<Teammate>;
  teammates: Observable<Teammate[]> | undefined;

  constructor(private db: AngularFirestore) {
    this.teammatesCollection = this.db.collection('team', ref => ref.orderBy('name', 'asc'));
  }

  getAll = () => {
    return this.teammatesCollection
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(t => {
            const data = t.payload.doc.data() as Teammate;
            data.id = t.payload.doc.id;
            return data;
          })
        })
      );
  }
}
