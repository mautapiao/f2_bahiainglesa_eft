import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryComponent } from './recovery.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('RecoveryComponent', () => {
  let component: RecoveryComponent;
  let fixture: ComponentFixture<RecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('debería crear el formulario con campo email', () => {
    expect(component.formRecovery.contains('email')).toBeTrue();
  });

  it('debería marcar email como inválido si está vacío', () => {
    const emailControl = component.formRecovery.get('email');
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalse();
  });

  it('debería marcar email como inválido si es muy corto', () => {
    const emailControl = component.formRecovery.get('email');
    emailControl?.setValue('m@g.c');
    expect(emailControl?.valid).toBeFalse();
    expect(emailControl?.errors?.['minlength']).toBeTruthy();
  });

  it('debería marcar email como inválido si no tiene formato correcto', () => {
    const emailControl = component.formRecovery.get('email');
    emailControl?.setValue('mj.tapia@gmail');
    expect(emailControl?.valid).toBeFalse();
    expect(emailControl?.errors?.['pattern']).toBeTruthy();
  });

  it('debería aceptar un email válido', () => {
    const emailControl = component.formRecovery.get('email');
    emailControl?.setValue('mj.tapia.o@gmail.com');
    expect(emailControl?.valid).toBeTrue();
  });



});
