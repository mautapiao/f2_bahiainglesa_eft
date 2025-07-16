import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ClientLayoutComponent } from './client-layout.component';

describe('ClientLayoutComponent', () => {
  let component: ClientLayoutComponent;
  let fixture: ComponentFixture<ClientLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientLayoutComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
