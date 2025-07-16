import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Representa la sección de footer en la página,
 * mostrando información sobre los creditos del sistema.
 */
@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
