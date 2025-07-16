import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

/**
 * Componente para la cuenta de usuario
 * Permite al usaurio actualizar sus datos personales
 */
@Component({
  selector: 'app-my-account',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})

export class MyAccountComponent {
  /**
   * Formulario reactivo para la cuenta de usuario 
   */
  formAccount: FormGroup;

  /** 
   * Bandera para saber si el formualrio fue enviado
   */
  submitted = false;

  /**
   * Constructor del componente
   * @param fb Servicio FormBuilder para crear el formulario
   */
  constructor(private fb: FormBuilder) {
    this.formAccount = this.fb.group({
      nombreCompleto: ['Mauricio Tapia Ortega', [Validators.required, Validators.minLength(4)]],
      nombreUsuario:  ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  /**
   * Envío de formulario
   * Valida los campos y muestra notificaciones usando SweetAlert2
   */
  onSubmit(): void {

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
      text: `${this.formAccount.value.nombreCompleto}`,
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

    console.log('Formulario válido', this.formAccount.value);
  }

}
