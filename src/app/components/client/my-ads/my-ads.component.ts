import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Ad } from '../../../interfaces/ad';
/**
 * Componente que muestra los ads para el cliente
 */
@Component({
  standalone: true,
  selector: 'app-my-ads',
  imports: [RouterModule,CommonModule],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.scss'
})
export class MyAdsComponent {
  /** Se ingrean Ad por defecto */
  ads: Ad[] = [];

/** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    // Realizamos una solicitud HTTP GET al archivo JSON que contiene los ads
    this.http.get<Ad[]>('https://mautapiao.github.io/jsonbi/ads.json')
      .subscribe({
        // next: Se ejecuta cuando la petición es exitosa
        next: (data) => {
          // Asignamos los datos recibidos a la propiedad ads del componente
          this.ads = data;
         
        },
        // error: Se ejecuta cuando hay un error en la petición
        error: (error) => {
          // Mostramos el error en la consola para debugging
          console.log('Error:', error);
        }
      });
  }



}