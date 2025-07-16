import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
/**
 * Representa la sección del cliente con sus opciones,
 * mostrando menúes de navegación relevantes para el usuario logeado.
 */
@Component({
  selector: 'app-client-home',
  imports: [RouterModule],
  templateUrl: './client-home.component.html',
  styleUrl: './client-home.component.scss'
})
export class ClientHomeComponent {

}
