import { Injectable } from '@angular/core';
/**
 * Servicio para la gestión de usuarios en el módulo de administración.
 * Proporciona métodos para crear, editar, eliminar y consultar usuarios.
 */
@Injectable({
  providedIn: 'root'

})

export class UserAdminService {
  /**
   * Constructor del servicio.
   * Se puede inyectar cualquier dependencia si es necesario en el futuro.
   */
  constructor(){}

  /**
   * Obtiene la lista de usuarios administradores.
   * @returns Un array de objetos con datos de usuarios (simulado).
   */
  private usuarios = [
    {
      id: 1,
      email: 'admin@empresa.cl',
      username: 'admin',
      fullName: 'Administrador Sistema',
      role: 'ADMIN',
      roleClass: 'bg-danger',
      createdAt: '01/01/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 2,
      email: 'juan.perez@empresa.cl',
      username: 'jperez',
      fullName: 'Juan Perez Gonzalez',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '15/02/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 3,
      email: 'maria.soto@empresa.cl',
      username: 'msoto',
      fullName: 'Maria Soto Rojas',
      role: 'EDITOR',
      roleClass: 'bg-info text-dark',
      createdAt: '20/03/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 4,
      email: 'carlos.munoz@empresa.cl',
      username: 'cmunoz',
      fullName: 'Carlos Munoz Diaz',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '05/04/2025',
      status: 'Inactivo',
      statusClass: 'bg-danger',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 5,
      email: 'ana.contreras@empresa.cl',
      username: 'acontreras',
      fullName: 'Ana Contreras Silva',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '10/05/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 6,
      email: 'luis.martinez@empresa.cl',
      username: 'lmartinez',
      fullName: 'Luis Martinez Sepulveda',
      role: 'EDITOR',
      roleClass: 'bg-info text-dark',
      createdAt: '22/06/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 7,
      email: 'sofia.morales@empresa.cl',
      username: 'smorales',
      fullName: 'Sofia Morales Rodriguez',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '01/07/2025',
      status: 'Inactivo',
      statusClass: 'bg-danger',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 8,
      email: 'diego.lopez@empresa.cl',
      username: 'dlopez',
      fullName: 'Diego Lopez Fuentes',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '18/08/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 9,
      email: 'camila.hernandez@empresa.cl',
      username: 'chernandez',
      fullName: 'Camila Hernandez Torres',
      role: 'ADMIN',
      roleClass: 'bg-danger',
      createdAt: '03/09/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 10,
      email: 'javier.araya@empresa.cl',
      username: 'jaraya',
      fullName: 'Javier Araya Flores',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '15/10/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 11,
      email: 'valentina.espinoza@empresa.cl',
      username: 'vespinoza',
      fullName: 'Valentina Espinoza Valenzuela',
      role: 'EDITOR',
      roleClass: 'bg-info text-dark',
      createdAt: '20/11/2025',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 12,
      email: 'matias.castillo@empresa.cl',
      username: 'mcastillo',
      fullName: 'Matias Castillo Ramirez',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '02/12/2025',
      status: 'Inactivo',
      statusClass: 'bg-danger',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 13,
      email: 'isidora.reyes@empresa.cl',
      username: 'ireyes',
      fullName: 'Isidora Reyes Gutierrez',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '10/01/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 14,
      email: 'benjamin.castro@empresa.cl',
      username: 'bcastro',
      fullName: 'Benjamin Castro Perez',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '25/01/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 15,
      email: 'florencia.gonzalez@empresa.cl',
      username: 'fgonzalez',
      fullName: 'Florencia Gonzalez Munoz',
      role: 'EDITOR',
      roleClass: 'bg-info text-dark',
      createdAt: '08/02/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 16,
      email: 'agustin.rojas@empresa.cl',
      username: 'arojas',
      fullName: 'Agustin Rojas Diaz',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '19/03/2024',
      status: 'Inactivo',
      statusClass: 'bg-danger',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 17,
      email: 'martina.soto@empresa.cl',
      username: 'msoto2',
      fullName: 'Martina Soto Contreras',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '01/04/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 18,
      email: 'vicente.silva@empresa.cl',
      username: 'vsilva',
      fullName: 'Vicente Silva Martinez',
      role: 'ADMIN',
      roleClass: 'bg-danger',
      createdAt: '15/04/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 19,
      email: 'emilia.sepulveda@empresa.cl',
      username: 'esepulveda',
      fullName: 'Emilia Sepulveda Morales',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '28/04/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 20,
      email: 'joaquin.rodriguez@empresa.cl',
      username: 'jrodriguez',
      fullName: 'Joaquin Rodriguez Lopez',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '10/05/2024',
      status: 'Inactivo',
      statusClass: 'bg-danger',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 21,
      email: 'antonella.fuentes@empresa.cl',
      username: 'afuentes',
      fullName: 'Antonella Fuentes Hernandez',
      role: 'EDITOR',
      roleClass: 'bg-info text-dark',
      createdAt: '22/05/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 22,
      email: 'martin.torres@empresa.cl',
      username: 'mtorres',
      fullName: 'Martin Torres Araya',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '03/06/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 23,
      email: 'maite.flores@empresa.cl',
      username: 'mflores',
      fullName: 'Maite Flores Espinoza',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '17/06/2024',
      status: 'Inactivo',
      statusClass: 'bg-danger',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 24,
      email: 'lucas.valenzuela@empresa.cl',
      username: 'lvalenzuela',
      fullName: 'Lucas Valenzuela Castillo',
      role: 'USUARIO',
      roleClass: 'bg-primary',
      createdAt: '01/07/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    },
    {
      id: 25,
      email: 'amanda.ramirez@empresa.cl',
      username: 'aramirez',
      fullName: 'Amanda Ramirez Reyes',
      role: 'EDITOR',
      roleClass: 'bg-info text-dark',
      createdAt: '15/07/2024',
      status: 'Activo',
      statusClass: 'bg-success',
      profileLink: 'admin_perfil.html'
    }
  ];

  /**
   * Obtiene la lista de todos los usuarios 
   * @returns Un array de objetos con datos de usuarios (simulado).
   */
  getUsersAdmin(){
    return this.usuarios;
  }

  /**
   * Obtiene la lista de un usuario especifico por id
   * @returns Un array de objetos con datos de usuarios (simulado).
   */
  getUserById(id:number){
    return this.usuarios.find(fila=>fila.id ===id);
  }

}
