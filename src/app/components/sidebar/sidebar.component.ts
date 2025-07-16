import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Representa la sección sidebar con distintos tipo de secciones informativa,
 * mostrando información sobre publicidad para empresas y emprendimientos.
 */

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
