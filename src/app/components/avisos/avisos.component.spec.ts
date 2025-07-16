import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AvisosComponent } from './avisos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AvisosComponent', () => {
  let component: AvisosComponent;
  let fixture: ComponentFixture<AvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisosComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
