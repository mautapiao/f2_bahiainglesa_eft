import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdscreateComponent } from './adscreate.component';

describe('AdscreateComponent', () => {
  let component: AdscreateComponent;
  let fixture: ComponentFixture<AdscreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdscreateComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  /** suo patchValue valores parciales para el test, setValue deben ser todos los campos */
  it('debe marcar inválido si los campos están vacíos o incompletos', () => {
    component.anuncioForm.patchValue({
      category: '',
      startDate: ''
    });
    expect(component.anuncioForm.valid).toBeFalse();
  });

  it('debería ser inválido si la fecha de inicio es mayor que la de fin', () => {
  component.anuncioForm.patchValue({
    startDate: '2025-12-31',
    endDate: '2025-01-01'
  });
  expect(component.anuncioForm.errors?.['fechaInvalida']).toBeTrue();
});

it('debería ser válido si todos los campos están bien', () => {
  component.anuncioForm.setValue({
    category: 'Promoción',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    image: {}, // simular objeto imagen
    description: 'Descripción válida de más de 10 caracteres',
    size:'1024',
    location:'Atacama',
    duration:'7',
    paymentMethod:'Transferencia'

  });
  expect(component.anuncioForm.valid).toBeTrue();
});


});
