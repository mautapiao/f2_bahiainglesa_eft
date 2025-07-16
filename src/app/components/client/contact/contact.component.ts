import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
/**
 * Formulario de contacto uso de NgModel
 * Las propiedades de esta interfaz están escritas en inglés para seguir buenas prácticas,
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',

})
export class ContactComponent {

  /**
  * Objeto json prueba de NgModel
  */
  contact = {
    name: 'Usuario Cliente',
    email: 'usuario@gmail.com',
    menssage: ''
  };

  /**
  * Metodo para envío de Formulario de contacto uso de NgModel
  */
  enviarFormulario(form: NgForm) {
    console.log('Formulario enviado:', this.contact);
    alert(`Gracias por escribirnos, ${this.contact.name}`);
    /** Limpia los campor del formulario  */
    form.resetForm();

    //this.contacto = { nombre: 'Usuario Cliente', email: 'usuario@gmail.com', mensaje: '' };

  }
}
