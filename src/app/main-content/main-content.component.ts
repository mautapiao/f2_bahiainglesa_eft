import { Component,AfterViewInit,Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "../components/posts/posts.component";
import { AvisosComponent } from "../components/avisos/avisos.component";
import { RestaurantsComponent } from "../components/restaurants/restaurants.component";
import { EventsComponent } from "../components/events/events.component";
import { ToursComponent } from "../components/tours/tours.component";
import { CalltoactionComponent } from "../components/calltoaction/calltoaction.component";
/**
 * Representa la sección de contenido principal del sitio
 * mostrando información dinámica sobre publicidad para empresas y emprendimientos.
 */
@Component({
  selector: 'app-main-content',
  imports: [RouterModule, CommonModule, PostsComponent, AvisosComponent, RestaurantsComponent, EventsComponent, ToursComponent, CalltoactionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit {

  /** Constructor usando Renderer2 para manipular el DOM de forma segura */
  constructor(private renderer: Renderer2) {}

  /** garantiza que el HTML fue renderizado antes de cargar el script */
  ngAfterViewInit(): void {
    
    const scriptId = 'weatherwidget-io-js';

    if (!document.getElementById(scriptId)) {
      const script = this.renderer.createElement('script');
      script.id = scriptId;
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      this.renderer.appendChild(document.body, script);
    } else {
      /** Si ya está cargado volver a ejecutar el script ...esto puede ser opcional */
      (window as any).__weatherwidget_init && (window as any).__weatherwidget_init();
    }
  }


  
  
}
