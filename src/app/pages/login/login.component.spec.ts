import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; 
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import {  RouterTestingModule } from '@angular/router/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

it('debería marcar email como inválido si no tiene @', () => {
  const email = component.formLogin.get('email');
  email?.setValue('mj.tapia.ogmail.com');
  expect(email?.valid).toBeFalse();
});

it('debería marcar email como inválido si no tiene dominio', () => {
  const email = component.formLogin.get('email');
  email?.setValue('mj.tapia@');
  expect(email?.valid).toBeFalse();
});

it('debería marcar email como válido si es correcto', () => {
  const email = component.formLogin.get('email');
  email?.setValue('mj.tapia.o@gmail.com');
  expect(email?.valid).toBeTrue();
});

});
