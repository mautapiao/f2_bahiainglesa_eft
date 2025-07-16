import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserAdmin } from '../../../interfaces/user-admin';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserAdminService } from '../../../services/user-admin.service';
import Swal from 'sweetalert2';

/**
 * Componente que muestra editar registro usuario
 */
@Component({
  selector: 'app-user-edit',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})

export class UserEditComponent {
  /**
   * Formulario reactivo para la cuenta de usuario 
   */
  formAccount: FormGroup;
  /** 
   * Bandera para saber si el formualrio fue enviado
   */
  submitted = false;

  /** 
   *  ? = puede ser undefined, para evitar errores
   */
  user?: UserAdmin;

  /**
    * Constructor del componente
    * @param fb Servicio FormBuilder para crear el formulario
    */
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserAdminService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(id);

    console.log(this.user);

    this.formAccount = this.fb.group({
      fullName: [this.user?.fullName || '', [Validators.required, Validators.minLength(4)]],
      userName: [this.user?.username || '', [Validators.required, Validators.minLength(4)]],
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      role: [this.user?.role || '', Validators.required],
      status: [this.user?.status || '', Validators.required]
    }
    );
  }
  /**
     * Envío de formulario
     * Valida los campos y muestra notificaciones usando SweetAlert2
     */
  onSubmit() {
    this.submitted = true;
    this.formAccount.markAllAsTouched();

    if (this.formAccount.invalid) {
      Swal.fire({
        title: 'Por favor completa todos los campos requeridos',
        icon: 'warning',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Cuenta Actualizada',
      text: `${this.formAccount.value.fullName}`,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }
}
