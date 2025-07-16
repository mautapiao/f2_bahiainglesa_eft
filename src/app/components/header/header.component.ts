import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
/**
 * Representa la sección de header en la página princial,
 * mostrando información de menúes.
 */
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /**
   * Constructor del componente
   */
  constructor(private router: Router) { }

  /**  Direccional menu de inicio */
  goHome(event: Event) {

    event.preventDefault(); // evitar recarga

    if (this.router.url === '/') {
      /** en home, solo hacer scroll */
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      /** Navegar a home */
      this.router.navigateByUrl('/').then(() => {
        /** Hacer scroll después de navegación  */
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /** Realiza un scroll al inicio de la página */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  /** Realiza un scrol a la sección */
  scrollToSection(sectionId: string): void {

    const element = document.getElementById(sectionId);

    if (element) {
      const headerHeight = 80; // Altura de header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

    } else {
      /** Si no encuentra el elemento, vuelve al inicio */
      console.warn(`Sección '${element}' no encontrada, volviendo al inicio`);
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

}
