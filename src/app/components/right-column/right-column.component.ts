import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Hospedaje } from '../../interfaces/hospedaje';
import { HttpClient } from '@angular/common/http';
/**
 * Componente que muestra la sección columna derecha en la página principal
 */
@Component({
  standalone: true,
  selector: 'app-right-column',
  imports: [RouterModule, CommonModule],
  templateUrl: './right-column.component.html',
  styleUrl: './right-column.component.scss'
})
export class RightColumnComponent {
 /** Lista de hospedaje destacados para mostrar  */
   hospedajes: Hospedaje[] = [];
 
   /** constructor de la clase */
   constructor(private http: HttpClient) { }
 
   /**
    * Método del ciclo de vida de Angular que se ejecuta automáticamente
    * cuando el componente ha sido inicializado.
    */
   ngOnInit(): void {
  
     // Realizamos una solicitud HTTP GET al archivo JSON que contiene los hospedajes
     this.http.get<Hospedaje[]>('https://mautapiao.github.io/jsonbi/hospedajes.json')
       .subscribe({
         // next: Se ejecuta cuando la petición es exitosa
         next: (data) => {
           // Asignamos los datos recibidos a la propiedad hospedaje del componente
           this.hospedajes = data;
         },
         // error: Se ejecuta cuando hay un error en la petición
         error: (error) => {
           // Mostramos el error en la consola para debugging
           console.log('Error:', error);
         }
       });
   }
}