import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestaurantsComponent } from './restaurants.component';
import { Restaurante } from '../../interfaces/restaurante';

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsComponent, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
  });
  /**
  * afterEach, Es una función de Jasmine framework de pruebas que usa Angular, 
  * que se ejecuta automáticamente después de cada it(...). 
  * Se usa para limpiar o verificar el estado posterior a una prueba.
  */
  afterEach(() => {
    httpMock.verify(); // Verifica que no haya peticiones pendientes
  });

  /** Define una prueba unitaria con una descripción clara de lo que se está evaluando */
  it('debería cargar los restaurantes con campos válidos desde la URL al inicializarse JSON', () => {

    /** // Datos simulados que se devolverán como respuesta a la petición HTTP */
    const mockRestaurantes: Restaurante[] = [
      {
        nombre: 'El Plateao',
        descripcion: 'Especialidad en mariscos frescos frente a la playa. Ambiente familiar y vista al atardecer.',
        ciudad: 'Bahía Inglesa',
        imagen: 'img/elplateado.png',
        instagram: 'https://www.instagram.com/elplateaoatacama/?hl=es'
      },
      {
        nombre: 'Coral Restaurant',
        descripcion: 'Propuesta gastronómica basada en cocinas populares y productos del mar.',
        ciudad: 'Bahía Inglesa',
        imagen: 'img/coralbahia.png',
        instagram: 'https://www.instagram.com/coraldebahia/?hl=es'
      }
    ];

    /** Ejecuta ngOnInit(), que internamente hace la petición HTTP */
    fixture.detectChanges(); // llama ngOnInit()

    /** Espera que se haya realizado una solicitud HTTP a la URL indicada */
    const req = httpMock.expectOne('https://mautapiao.github.io/jsonbi/restaurantes.json');

    /** Verifica que la solicitud realizada sea de tipo GET */
    expect(req.request.method).toBe('GET');

    /** Simula una respuesta del servidor devolviendo el array `mockRestaurantes` */
    req.flush(mockRestaurantes);

    /** Verifica que el componente haya recibido y almacenado correctamente los datos */
    expect(component.restaurantes.length).toBe(2); // Confirma que se cargaron 2 elementos
    expect(component.restaurantes).toEqual(mockRestaurantes); // Confirma que el contenido recibido es igual al simulado

  });

});
