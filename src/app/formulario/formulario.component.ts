import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  botonDesactivado: boolean = true;

  constructor(private router: Router) {}

  verificarCampos(): void {
    this.botonDesactivado = !(this.nombre && this.email);
  }

  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
    this.redirigirARegistros();
  }

  confirmarEnvio(): void {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      this.onSubmit();
    }
  }

  redirigirARegistros(): void {
    const queryParams: any = {
      nombre: this.nombre,
      email: this.email
    };

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/registros'], navigationExtras);
  }
}
