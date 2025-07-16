import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Tour } from '../../interfaces/tour';
import { DataResponse } from '../../interfaces/dataresponse';
/**
 * Componente que muestra la sección de tours destacados en la página principal
 */
@Component({
  standalone: true,
  selector: 'app-tours',
  imports: [CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent {

  /** Lista de tours destacados para mostrar  */
  tours: Tour[] = [];

  /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    /** Opción 1 funcional */
    /*
     this.http.get<Tour[]>('https://mautapiao.github.io/jsonbi/tours.json')
       .subscribe(data => {
         this.tours = data;
       });
    */

    /** Realizamos una solicitud HTTP GET al archivo JSON que contiene los tours */
    /** Utilizo un archivo json remoto por cada "modelo" */

    this.http.get<Tour[]>('https://mautapiao.github.io/jsonbi/tours.json')
      .subscribe({
        // next: Se ejecuta cuando la petición es exitosa
        next: (data) => {
          // Asignamos los datos recibidos a la propiedad tours del componente
          this.tours = data;
        },
        // error: Se ejecuta cuando hay un error en la petición
        error: (error) => {
          // Mostramos el error en la consola para debugging
          console.log('Error:', error);
        }
      });

    /** Existe otra forma de tener un solo archivo Json con toda la información */

    /*
    this.http.get<DataResponse>('https://mautapiao.github.io/jsonbi/data.json')
      .subscribe({
        next: (data) => {
          this.tours = data.tours;
          
        },
        error: (error) => {
          console.error('Error cargando JSON:', error);
        }
      });
    */
  }

}