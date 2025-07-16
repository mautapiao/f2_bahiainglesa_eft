import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AdSpot } from '../../../interfaces/adspot';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
/**
 * Componente que muestra los valores de los planes cliente
 */
@Component({
  standalone: true,
  selector: 'app-admin-plans',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './admin-plans.component.html',
  styleUrl: './admin-plans.component.scss'
})

export class AdminPlansComponent {
  /** Editar spot */
  editedSpot: any = {};
  /** indes de la fila */
  editingIndex: number = -1;

  /** Poblamiento de registros plan */
  adSpots: AdSpot[] = [];

  /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    /** Realizar una solicitud HTTP GET al archivo JSON que contiene los precios */
    this.http.get<AdSpot[]>('https://mautapiao.github.io/jsonbi/adspots.json')
      .subscribe({
        /** next: Se ejecuta cuando la petición es exitosa */
        next: (data) => {
          /** Asignar los datos recibidos a la propiedad adspots del componente */
          this.adSpots = data;
        },
        /** error: Se ejecuta cuando hay un error en la petición */
        error: (error) => {
          /** Mostrar el error en la consola para debugging */
          console.log('Error:', error);

        }
      });

  }

  /** Confirmar la eliminación del registro */
  confirmDelete(index: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la fila.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adSpots.splice(index, 1); // Eliminar la fila del array
        Swal.fire('Eliminado', 'La fila ha sido eliminada.', 'success');
      }
    });
  }

  /** abrir el modal opción 2 es mas reducida en código */
  openEditSpotModal(index: number): void {
    this.editingIndex = index;
    this.editedSpot = { ...this.adSpots[index] }; // Copia los datos

    const modal = new (window as any).bootstrap.Modal(document.getElementById('editSpotModal'));
    modal.show();
  }
  /** grabar opción al copiar los datos */
  saveEditedSpot(): void {
    if (this.editingIndex !== -1) {

      /** operador de propagación o spread operator (...).
       *  Su función es copiar todas las propiedades de un objeto en otro nuevo.
       */
      this.adSpots[this.editingIndex] = { ...this.editedSpot };
      this.editingIndex = -1;

      const modalEl = document.getElementById('editSpotModal');
      if (modalEl) {
        const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
        modal?.hide();
      }
    }
  }

}
