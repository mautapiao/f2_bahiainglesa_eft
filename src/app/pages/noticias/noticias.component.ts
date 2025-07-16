import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Componente que muestra la sección de noticias del sitio.
 * 
 * Actualmente es un componente base sin lógica interna,
 * pero puede ser ampliado para cargar noticias desde una API o mostrar artículos destacados.
 */

@Component({
  selector: 'app-noticias',
  imports: [RouterModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {

}
