import { Component } from '@angular/core';
import { MainContentComponent } from "../../main-content/main-content.component";

/**
 * Componente que muestra la sección de bienvenida del sitio.
 * 
 * Actualmente es un componente base sin lógica interna,
 * pero puede ser ampliado para cargar información desde una API o mostrar artículos destacados.
 */

@Component({
  selector: 'app-inicio',
  imports: [MainContentComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
