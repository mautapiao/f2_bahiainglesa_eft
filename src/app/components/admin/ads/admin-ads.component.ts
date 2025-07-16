import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdAdmin } from '../../../interfaces/adadmin';
import { HttpClient } from '@angular/common/http';
/**
 * Componente para administración de ads cliente
 */
@Component({
  standalone: true,
  selector: 'app-admin-ads',
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-ads.component.html',
  styleUrl: './admin-ads.component.scss'
})

export class AdminAdsComponent {

  /** Poblamiendo de los anuncios */
  ads: AdAdmin[] = [];

  /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    // Realizamos una solicitud HTTP GET al archivo JSON que contiene los ads
    this.http.get<AdAdmin[]>('https://mautapiao.github.io/jsonbi/adadmin.json')
      .subscribe({
        // next: Se ejecuta cuando la petición es exitosa
        next: (data) => {
          // Asignamos los datos recibidos a la propiedad ads admin del componente
          this.ads = data;
        },
        // error: Se ejecuta cuando hay un error en la petición
        error: (error) => {
          // Mostramos el error en la consola para debugging
          console.log('Error:', error);
        }
      });
  }

  /**
   * Cambia el estado activo/inactivo del anuncio.
   * Este método podría ser conectado a una llamada a la base de datos.
   * @param ad El anuncio cuyo estado se desea alternar.
   */
  toggleActivo(ad: AdAdmin): void {
    // Si el anuncio está activo, lo desactiva
    // Si no está activo, lo activa
    ad.active = !ad.active;
    // Aquí a db para persistir el cambio
  }
}