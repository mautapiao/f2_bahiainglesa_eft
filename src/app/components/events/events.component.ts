import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../../interfaces/evento';
/**
 * Componente que muestra la sección de eventos destacados en la página principal
 */
@Component({
  standalone: true,
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  /** Lista de eventos turísticos con su imagen, descripción y fecha. */

  eventos: Evento[] = [];

  /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    // Realizamos una solicitud HTTP GET al archivo JSON que contiene los eventos
    this.http.get<Evento[]>('https://mautapiao.github.io/jsonbi/eventos.json')
      .subscribe({
        // next: Se ejecuta cuando la petición es exitosa
        next: (data) => {
          // Asignamos los datos recibidos a la propiedad eventos del componente
          this.eventos = data;
        },
        // error: Se ejecuta cuando hay un error en la petición
        error: (error) => {
          // Mostramos el error en la consola para debugging
          console.log('Error:', error);
        }
      });
  }

}