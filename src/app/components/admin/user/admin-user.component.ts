import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserAdmin } from '../../../interfaces/user-admin';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
/**
 * Representa la sección de administración de usuarios 
 */
@Component({
  standalone: true,
  selector: 'app-admin-user',
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
/**
 * Componente de administración de anuncios (Ads).
 * Muestra una lista de anuncios y permite activar/desactivar cada uno
 */
export class AdminUserComponent {

  /** Index de para edición de usuario */
  editingIndex: number = -1;

  /** Poblamiendo de los usuarios */
  usuarios: UserAdmin[] = [];
  /** Obtener todos los usuarios desde el servicio 
  constructor( private userAdminService:UserAdminService){
    this.usuarios=this.userAdminService.getUsersAdmin();
  }*/

  /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    /** Realizar una solicitud HTTP GET al archivo JSON que contiene los precios */
    this.http.get<UserAdmin[]>('https://mautapiao.github.io/jsonbi/users.json')
      .subscribe({
        /** next: Se ejecuta cuando la petición es exitosa */
        next: (data) => {
          /** Asignar los datos recibidos a la propiedad adspots del componente */
          this.usuarios = data;
          console.log(data);
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
        this.usuarios.splice(index, 1); // Eliminar la fila del array
        Swal.fire('Eliminado', 'La fila ha sido eliminada.', 'success');
      }
    });
  }


}
