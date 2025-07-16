import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Category } from '../../../interfaces/category';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
/**
 * Componente que muestra las categorias del sistema para los avisos
 */
@Component({
  standalone: true,
  selector: 'app-admin-category',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './admin-category.component.html',
  styleUrl: './admin-category.component.scss'
})
export class AdminCategoryComponent {

  /** editar categoria */
  editedCategory: any = {};
  /** Indice de fila */
  editingIndex: number = -1;

  /** Poblamiento de categorías */
  categories: Category[] = [];

  /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    /** Realizó una solicitud HTTP GET al archivo JSON que contiene las categorias */
    this.http.get<Category[]>('https://mautapiao.github.io/jsonbi/categories.json')
      .subscribe({
        /** next: Se ejecuta cuando la petición es exitosa */
        next: (data) => {
          /** Asignar los datos recibidos a la propiedad categoria del componente */
          this.categories = data;
        },
        /** error: Se ejecuta cuando hay un error en la petición */
        error: (error) => {
          /** Muestra el error en la consola para debugging */
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
        this.categories.splice(index, 1); // Eliminar la fila del array
        Swal.fire('Eliminado', 'La fila ha sido eliminada.', 'success');
      }
    });
  }

  /** Abre el modal y carga los datos de la fila seleccionada */
  openEditModal(index: number): void {
    /** Guardar el índice de la fila que vamos a editar */
    this.editingIndex = index;

    /** Crear una copia del objeto de la fila para no modificarlo directamente */
    const selectedCategory = this.categories[index];
    this.editedCategory = {
      id: selectedCategory.id,
      name: selectedCategory.name,
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
      this.categories[this.editingIndex] = {
        id: this.editedCategory.id,
        name: this.editedCategory.name,
        description: this.editedCategory.description,
        isActive: this.editedCategory.isActive
      };

      /** Limpiar el índice actual */
      this.editingIndex = -1;

      /** Cerrar el modal de edición */
      const modalElement = document.getElementById('editModal');
      if (modalElement) {
        const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
        modal?.hide();
      }

      /** Mostrar una alerta de éxito */
      Swal.fire('Guardado', 'La categoría ha sido actualizada.', 'success');
    }
  }
}