import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('debe ser inválido si está vacío', () => {
    component.formRegister.setValue({
      nombreCompleto: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });
    expect(component.formRegister.valid).toBeFalse();
  });

  it('valida que el email tenga al menos 10 caracteres y formato válido', () => {
    const emailControl = component.formRegister.get('email');

    emailControl?.setValue('abc@c'); // corto y mal formato
    expect(emailControl?.valid).toBeFalse();

    emailControl?.setValue('usuario@dominio');
    expect(emailControl?.valid).toBeFalse();

    emailControl?.setValue('usuario@dominio.com');
    expect(emailControl?.valid).toBeTrue();
  });

  it('valida que el password cumpla con los requisitos', () => {
    const passwordControl = component.formRegister.get('password');

    passwordControl?.setValue('abc'); // demasiado corto
    expect(passwordControl?.valid).toBeFalse();

    passwordControl?.setValue('abcdefg'); // sin mayúsculas ni dígitos
    expect(passwordControl?.valid).toBeFalse();

    passwordControl?.setValue('Abcdef1'); // válido
    expect(passwordControl?.valid).toBeTrue();
  });

  it('debe ser inválido si las contraseñas no coinciden', () => {
    component.formRegister.setValue({
      nombreCompleto: 'Juan Pérez',
      email: 'juan@correo.com',
      password: 'Abcdef1',
      passwordConfirm: 'Diferente123'
    });

    expect(component.formRegister.valid).toBeFalse();
    expect(component.formRegister.hasError('passwordsNoCoinciden')).toBeTrue();
  });

  it('debe ser válido si todos los campos son correctos y contraseñas coinciden', () => {
    component.formRegister.setValue({
      nombreCompleto: 'Juan Pérez',
      email: 'juan@correo.com',
      password: 'Abcdef1',
      passwordConfirm: 'Abcdef1'
    });

    expect(component.formRegister.valid).toBeTrue();
  });
});
