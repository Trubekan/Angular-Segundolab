import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  nombre: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.obtenerDatosFormulario();
  }

  obtenerDatosFormulario() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.email = params['email'];
    });
  }
}
