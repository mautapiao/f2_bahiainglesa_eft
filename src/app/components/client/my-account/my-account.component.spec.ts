import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyAccountComponent } from './my-account.component';

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAccountComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el formulario con valores iniciales', () => {
    const form = component.formAccount;
    expect(form).toBeTruthy();
    expect(form.get('nombreCompleto')?.value).toBe('Mauricio Tapia Ortega');
    expect(form.get('nombreUsuario')?.value).toBe('');
  });

  it('debe marcar inválido si los campos están vacíos o incompletos', () => {
    component.formAccount.setValue({
      nombreCompleto: '',
      nombreUsuario: ''
    });
    expect(component.formAccount.valid).toBeFalse();
  });

  it('debe validar que nombreCompleto tenga al menos 4 caracteres', () => {
    const control = component.formAccount.get('nombreCompleto');
    control?.setValue('Ana');
    expect(control?.valid).toBeFalse();

    control?.setValue('Anita');
    expect(control?.valid).toBeTrue();
  });

  it('debe validar que nombreUsuario sea requerido y mínimo 4 caracteres', () => {
    const control = component.formAccount.get('nombreUsuario');
    
    control?.setValue('');
    expect(control?.valid).toBeFalse();

    control?.setValue('abc');
    expect(control?.valid).toBeFalse();

    control?.setValue('abcd');
    expect(control?.valid).toBeTrue();
  });

  it('debe marcar el formulario como válido si los campos están completos', () => {
    component.formAccount.setValue({
      nombreCompleto: 'Carlos',
      nombreUsuario: 'carlitos'
    });
    expect(component.formAccount.valid).toBeTrue();
  });


});
