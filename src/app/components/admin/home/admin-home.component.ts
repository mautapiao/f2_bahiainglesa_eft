import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Representa la sección del cliente con sus opciones
 * mostrando menúes de navegación relevantes para el usuario logeado
 * Las propiedades de esta interfaz están escritas en inglés para seguir buenas prácticas
 */
@Component({
  selector: 'app-admin-home',
  imports: [RouterModule,CommonModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {

}
