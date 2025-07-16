import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restaurante } from '../../interfaces/restaurante';
import { HttpClient } from '@angular/common/http';
/**
 * Componente que muestra la sección de restaurantes destacados en la página principal
 */
@Component({
  standalone: true,
  selector: 'app-restaurants',
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
  
  /** Lista de tours destacados para mostrar  */
  restaurantes: Restaurante[] = [];

  /** constructor de la clase */
  constructor(private http: HttpClient) { }
  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    // Realizamos una solicitud HTTP GET al archivo JSON que contiene los restaurant
    this.http.get<Restaurante[]>('https://mautapiao.github.io/jsonbi/restaurantes.json')
      .subscribe({
        // next: Se ejecuta cuando la petición es exitosa
        next: (data) => {
          // Asignamos los datos recibidos a la propiedad restaurant del componente
          this.restaurantes = data;
        },
        // error: Se ejecuta cuando hay un error en la petición
        error: (error) => {
          // Mostramos el error en la consola para debugging
          console.log('Error:', error);
          

        }
      });

  }

}