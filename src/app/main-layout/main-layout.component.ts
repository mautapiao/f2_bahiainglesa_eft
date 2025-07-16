import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { HeroBahiaComponent } from "../components/hero-bahia/hero-bahia.component";
import { FooterComponent } from "../components/footer/footer.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { RightColumnComponent } from "../components/right-column/right-column.component";

/**
 * Representa la sección la layout princila del sitio web,
 */
@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet ,HeaderComponent, HeroBahiaComponent, FooterComponent, SidebarComponent,  RightColumnComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
