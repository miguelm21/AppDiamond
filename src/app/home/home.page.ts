import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { PlatosService } from '../services/platos.service';
import { PromosService } from '../services/promos.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  	platos: Object[];
  	promos: Object[];

  	constructor( private router : Router, private menu: MenuController, private platoService: PlatosService, private promoService: PromosService) { }

	ngOnInit() {
		this.platoService.getPlatos().subscribe(res => {
			var array = [];

			res.forEach( row => {
				var a = { precioPlato: row.payload.val().PrecioPlato, descripcionPlato: row.payload.val().descripcionPlato, nombrePlato: row.payload.val().nombrePlato, image: row.payload.val().rutaGuardaImagen, key: row.key }
				array.push(a);
			});

			this.platos = array;
		});

		this.promoService.getPromos().subscribe(res => {
			var array2 = [];

			res.forEach( row => {
				var a = { precioPromo: row.payload.val().PrecioPromo, nombrePromo: row.payload.val().nombrePromo, cantidadPromo: row.payload.val().cantidadPromo, image: row.payload.val().rutaGuardaImagen, key: row.key }
				array2.push(a);
			});

			this.promos = array2;
		});
	}

	slideOpts = {
		initialSlide: 1,
		speed: 400,
		slidesPerView: 2,
		pagination: false
	};

	detalles(id){
		this.router.navigate(['/detalles-productos'], { queryParams: { id: id } });
	}

}
