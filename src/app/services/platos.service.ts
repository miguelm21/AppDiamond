import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
	providedIn: 'root'
})
export class PlatosService {
	private data;

	constructor(private firestore: AngularFirestore, private database: AngularFireDatabase) {
		this.data = this.database.list('Platos').snapshotChanges();
		/* this.data.subscribe(actions => {
			actions.forEach(action => {
				console.log(action.type);
				console.log(action.key);
				console.log(action.payload.val());
			});
		}); */
	}

	getPlatos() {
		return this.data;
	}

	getPlato(id) {
		return this.database.list('/Platos', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
	}
}
