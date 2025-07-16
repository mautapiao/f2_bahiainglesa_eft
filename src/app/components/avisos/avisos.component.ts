import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Aviso } from '../../interfaces/aviso';
import { HttpClient } from '@angular/common/http';

/**
 * Componente que muestra la sección de avisos en la página principal
 */
@Component({
  selector: 'app-avisos',
  imports: [RouterModule, CommonModule],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.scss'
})
export class AvisosComponent {
  /** Lista de avisos destacados para mostrar  */
    avisos: Aviso[] = [];
  
    /** constructor de la clase */
    constructor(private http: HttpClient) { }
  
    /**
     * Método del ciclo de vida de Angular que se ejecuta automáticamente
     * cuando el componente ha sido inicializado.
     */
    ngOnInit(): void {
  

      // Realizamos una solicitud HTTP GET al archivo JSON que contiene los avisos
      this.http.get<Aviso[]>('https://mautapiao.github.io/jsonbi/avisos.json')
        .subscribe({
          // next: Se ejecuta cuando la petición es exitosa
          next: (data) => {
            // Asignamos los datos recibidos a la propiedad tours del componente
            this.avisos = data;
          },
          // error: Se ejecuta cuando hay un error en la petición
          error: (error) => {
            // Mostramos el error en la consola para debugging
            console.log('Error:', error);
          }
        });
  
    }
  

}
