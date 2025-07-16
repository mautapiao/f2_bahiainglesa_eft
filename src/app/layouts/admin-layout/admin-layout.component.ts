import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
/**
 * Representa la sección autentificada del rol admin,
 * mostrando menúes de navegación relevantes para el usuario logeado.
 */
@Component({
  selector: 'app-admin-layout',
  imports: [RouterModule, RouterOutlet ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
