import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Notice } from '../../../interfaces/notice';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
/**
 * Componente que muestras los post al administrador
 */
@Component({
  standalone: true,
  selector: 'app-admin-post',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './admin-post.component.html',
  styleUrl: './admin-post.component.scss'
})
export class AdminPostComponent {
  /** Edit post */
  editedPost: any = {};
  /** Index de fila por defecto */
  editingIndex: number = -1;

  /** Carga de noticias */
  notices: Notice[] = [];

  /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    /** Realizar una solicitud HTTP GET al archivo JSON que contiene noticias */
    this.http.get<Notice[]>('https://mautapiao.github.io/jsonbi/notices.json')
      .subscribe({
        /** next: Se ejecuta cuando la petición es exitosa */
        next: (data) => {
          /** Asignar los datos recibidos a la propiedad noticias del componente */
          this.notices = data;
        },
        /** error: Se ejecuta cuando hay un error en la petición */
        error: (error) => {
          /** Muestro el error en la consola para debugging */
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
        this.notices.splice(index, 1); // Eliminar la fila del array
        Swal.fire('Eliminado', 'La fila ha sido eliminada.', 'success');
      }
    });
  }

  /** Abrir el modal y carga los datos de la fila seleccionada */
  openEditModal(index: number): void {
    /** Guardo el índice de la fila que vamos a editar */
    this.editingIndex = index;

    /** Crear una copia del objeto de la fila para no modificarlo directamente */
    const selectedCategory = this.notices[index];
    this.editedPost = {
      id: selectedCategory.id,
      title: selectedCategory.title,
      description: selectedCategory.description,
      isActive: selectedCategory.isActive
    };

    /** Obtener el modal del DOM usando su ID */
    const modalElement = document.getElementById('editModal');

    /** Crear una instancia del modal de Bootstrap y lo mostramos */
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  /** Guardar los cambios del formulario en la tabla */
  saveChanges(): void {
    /** Verificar que se haya seleccionado una fila para editar */
    if (this.editingIndex !== -1) {
      /** Reemplazar el objeto original con los datos editados */
      this.notices[this.editingIndex] = {
        id: this.editedPost.id,
        title: this.editedPost.title,
        description: this.editedPost.description,
        isActive: this.editedPost.isActive
      };

      /** Limpiar el índice actual */
      this.editingIndex = -1;

      /** Cierra el modal de edición */
      const modalElement = document.getElementById('editModal');
      if (modalElement) {
        const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
        modal?.hide();
      }

      /** Muestra alerta de éxito */
      Swal.fire('Guardado', 'La categoría ha sido actualizada.', 'success');
    }
  }
}