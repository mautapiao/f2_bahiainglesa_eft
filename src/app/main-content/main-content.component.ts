import { Component } from '@angular/core';
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
export class MainContentComponent {

  
}
