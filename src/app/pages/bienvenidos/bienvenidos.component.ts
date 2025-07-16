import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Componente que muestra la sección de bienvenida del sitio.
 * 
 * Actualmente es un componente base sin lógica interna,
 * pero puede ser ampliado para cargar información desde una API o mostrar artículos destacados.
 */
@Component({
  selector: 'app-bienvenidos',
  imports: [RouterModule],
  templateUrl: './bienvenidos.component.html',
  styleUrl: './bienvenidos.component.scss'
})
export class BienvenidosComponent {

}
