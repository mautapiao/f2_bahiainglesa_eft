import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroBahiaComponent } from "./components/hero-bahia/hero-bahia.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RightColumnComponent } from "./components/right-column/right-column.component";

/**
 * Componente app princial por defecto
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/** Exportar variable app title */
export class AppComponent {

  /** define el nombre para titulo */
  title = 'bahiainglesa_ng';
}
