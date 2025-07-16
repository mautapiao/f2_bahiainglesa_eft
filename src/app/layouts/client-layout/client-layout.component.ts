import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

/**
 * Representa la sección autentificada del cliente,
 * mostrando menúes de navegación relevantes para el usuario logeado.
 */
@Component({
  selector: 'app-client-layout',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss'
})
export class ClientLayoutComponent {

}
