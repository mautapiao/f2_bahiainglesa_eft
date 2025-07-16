import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';
/**
 * Componente que muestra la página de registro
 */
@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  /**
   * Formulario reactivo para la cuenta de usuario 
   */
  formRegister: FormGroup;
  /** 
   * Bandera para saber si no coinciden las password
   */
  noCoincide = false;
  /** 
   * Bandera para saber si el formualrio fue enviado
   */
  submitted = false;

   /**
   * Constructor del componente
   * @param fb Servicio FormBuilder para crear el formulario
   */
  constructor(private fb: FormBuilder) {

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.formRegister = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(10), Validators.pattern(emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ['', Validators.required],
    }, { validator: this.passwordsIguales }); // <- usar `validator` en vez de `validators`

  }

  /** Validar contraseña */
  passwordsIguales(form: FormGroup): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('passwordConfirm');

    /** Las contraseñas no coinciden */
    if (!password || !confirmPassword) {
      return null;
    }

    /** Las contraseñas con iguales */
    if (password.value === confirmPassword.value) {
      return null;
    } else {
      /** Las contraseñas no coinciden */
      return { passwordsNoCoinciden: true }; 
    }
  }

  /**
   * Envío de formulario
   * Valida los campos y muestra notificaciones usando SweetAlert2
   */
  onSubmit() {

    console.log('🔥 onSubmit() se ejecutó');

    this.submitted = true;
    this.formRegister.markAllAsTouched();

    if (this.formRegister.invalid) {

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
      title: 'Registro exitoso',
      text: `Bienvenido, ${this.formRegister.value.nombreCompleto}`,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {

      this.formRegister.reset();
      this.submitted = false;

    });

    console.log(this.formRegister.value);
  }

   /**
   * Limpia el formulario
   */
  onReset() {
    Swal.fire({
      title: '¿Limpiar el formulario?',
      text: 'Se borrarán todos los datos ingresados.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, limpiar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.formRegister.reset();
        this.submitted = false;

        Swal.fire({
          title: 'Formulario limpio',
          icon: 'success',
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
      }
    });
  }
}