import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidosComponent } from './bienvenidos.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BienvenidosComponent', () => {
  let component: BienvenidosComponent;
  let fixture: ComponentFixture<BienvenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienvenidosComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BienvenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
