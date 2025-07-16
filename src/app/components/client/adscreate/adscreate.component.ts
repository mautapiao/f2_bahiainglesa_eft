import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
/**
 * Area de cliente administración de Ads
 * Las propiedades de esta interfaz están escritas en inglés para seguir buenas prácticas,
 */
@Component({
  selector: 'app-adscreate',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './adscreate.component.html',
  styleUrl: './adscreate.component.scss'
})
export class AdscreateComponent {
  /**
   * Formulario reactivo para la cuenta de usuario 
   */
  anuncioForm: FormGroup;

  /**
   * Formulario reactivo se usa para limpiar el input type file
   */
  @ViewChild('fileInput') fileInput!: ElementRef;

  /**
   * Constructor 
   */
  constructor(private fb: FormBuilder) {

    /** 
     * Validación de campos formulario
     */
    this.anuncioForm = this.fb.group({
      category: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      image: [null, Validators.required],
      size: ['', Validators.required],
      location: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      paymentMethod: ['', Validators.required]
    }, { validator: this.fechaInicioMenorQueFin });

  }

  
  /**
   * Envío de formulario
   */
  onSubmit() {

    if (this.anuncioForm.valid) {
      console.log('Formulario enviado:', this.anuncioForm.value);

      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: `Su anuncio ha sido ingresado`,
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

        /** Limpieza de formulario */
        this.anuncioForm.reset();
        /** Limpieza de input type file */
        this.fileInput.nativeElement.value = '';

      });

    } else {
      /** Marca los campos como tocados */
      this.anuncioForm.markAllAsTouched();
    }
  }

  /** Envio de archivos */
  onFileSelected(event: Event) {
    /** Define variable de un elemento input */
    const input = event.target as HTMLInputElement;

    /** Verifica su existe archivo */
    if (input.files?.length) {
      this.anuncioForm.get('image')?.setValue(input.files[0]);
    } else {
      this.anuncioForm.get('image')?.setValue(null);
    }
  }

  /**
   * Limpieza de formulario
   */
  clearForm() {

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

        this.anuncioForm.reset();
        this.fileInput.nativeElement.value = '';  // limpia el input file
        /** Envia un toast al usuario */
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

  /**
   * Validación de fecha inicial y fecha final
   */
  fechaInicioMenorQueFin: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const start = group.get('startDate')?.value;
    const end = group.get('endDate')?.value;

    if (!start || !end) return null;

    return new Date(start) <= new Date(end)
      ? null
      : { fechaInvalida: true };
  };

}
