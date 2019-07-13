import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatosService } from '../services/platos.service';

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.page.html',
  styleUrls: ['./detalles-productos.page.scss'],
})
export class DetallesProductosPage implements OnInit {

  sub;
  id;
  plato;

  constructor(private route: ActivatedRoute, private router: Router, private platoService: PlatosService) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      if(params.id) {
        this.id = params.id;
      } else {
        this.id = 0;
      }
    });

    this.platoService.getPlato(this.id).subscribe( success => {
      var a = { key: success[0].key, data: success[0].payload.val() }
      this.plato = a;
    }, error => {
      console.log(error);
    })
    console.log(this.id);
  }

  slideProducts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
  };


}
