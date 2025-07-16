// auth-layout.component.ts
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

/**
 * Representa la sección para login de sistema,
 * mostrando menúes relevantes para login, register y recovery.
 */
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {}