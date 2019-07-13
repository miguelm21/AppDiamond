import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PromosService {
	private data;

  constructor(private firestore: AngularFirestore, private database: AngularFireDatabase) {
    this.data = this.database.list('Promo').snapshotChanges();
  }

  getPromos() {
		return this.data;
	}
}
