import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserEditComponent } from './user-edit.component';

describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el formulario con campos vacíos por defecto', () => {
    const form = component.formAccount;
    expect(form).toBeTruthy();
    expect(form.get('fullName')?.value).toBe('');
    expect(form.get('email')?.value).toBe('');
  });

  it('debe marcar inválido si los campos están vacíos', () => {
    component.formAccount.setValue({
      fullName: '',
      userName: '',
      email: '',
      role: '',
      status: ''
    });
    expect(component.formAccount.valid).toBeFalse();
  });

  it('debe marcar válido si los campos tienen datos correctos', () => {
    component.formAccount.setValue({
      fullName: 'Juan Pérez',
      userName: 'juanp',
      email: 'juan@example.com',
      role: 'ADMIN',
      status: 'activo'
    });
    expect(component.formAccount.valid).toBeTrue();
  });

  it('debe validar que fullName tenga al menos 4 caracteres', () => {
    const control = component.formAccount.get('fullName');
    control?.setValue('Ana');
    expect(control?.valid).toBeFalse();

    control?.setValue('Anita');
    expect(control?.valid).toBeTrue();
  });

  it('debe validar el formato del email', () => {
    const control = component.formAccount.get('email');
    control?.setValue('noesemail');
    expect(control?.valid).toBeFalse();

    control?.setValue('correo@dominio.cl');
    expect(control?.valid).toBeTrue();
  });


});
