import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
/**
 * Componente que muestra la sección de recuperar contraseña
 */
@Component({
  selector: 'app-recovery',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.scss'
})

export class RecoveryComponent {
  /**
   * Formulario reactivo para la cuenta de usuario 
   */
  formRecovery: FormGroup;
  /** 
   * Bandera para saber si el formualrio fue enviado
   */
  submitted = false;

  /**
   * Constructor del componente
   * @param fb Servicio FormBuilder para crear el formulario
   */
  constructor(private fb: FormBuilder) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /** Validación de correo electrónico */
    this.formRecovery = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(10), Validators.pattern(emailRegex)]],
    });
  }

  /**
   * Envío de formulario
   * Valida los campos y muestra notificaciones usando SweetAlert2
   */
  onSubmit() {

    this.submitted = true;
    this.formRecovery.markAllAsTouched();

    if (this.formRecovery.invalid) {
     
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        text: 'Por favor ingresa un correo válido',
        timer: 3000,
        showConfirmButton: true,
        position: 'center',
        timerProgressBar: true,
        showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown',
      }
      });
      return;
    }

    const { email } = this.formRecovery.value;

    Swal.fire({
      icon: 'info',
      title: 'Correo enviado',
      text: `Si el correo ${email} está registrado, recibirás instrucciones por email.`,
      timer: 5000,
      showConfirmButton: true,
      position: 'center',
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown',
      }
    }).then(() => {
      this.formRecovery.reset(); // Limpia el campo
      this.submitted = false;
    });

    /* implementar aqui la logica de envio de link etc */
  }
}