import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToursComponent } from './tours.component';
import { Tour } from '../../interfaces/tour';

describe('ToursComponent', () => {
  let component: ToursComponent;
  let fixture: ComponentFixture<ToursComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursComponent, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToursComponent);
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
  it('debería cargar los tours con campos válidos desde la URL al inicializarse JSON', () => {
 
    /** // Datos simulados que se devolverán como respuesta a la petición HTTP */
    const mockTours: Tour[] = [
      {
        titulo: 'Tour Andes',
        detalle: 'Un viaje por la cordillera de los Andes.',
        icono: 'fas fa-mountain'
      },
      {
        titulo: 'Ruta del Vino',
        detalle: 'Degustación en viñedos del Valle Central.',
        icono: 'fas fa-wine-glass-alt'
      }
    ];

    /** Ejecuta ngOnInit(), que internamente hace la petición HTTP */
    fixture.detectChanges(); // llama ngOnInit()

    /** Espera que se haya realizado una solicitud HTTP a la URL indicada */
    const req = httpMock.expectOne('https://mautapiao.github.io/jsonbi/tours.json');

    /** Verifica que la solicitud realizada sea de tipo GET */
    expect(req.request.method).toBe('GET');

    /** Simula una respuesta del servidor devolviendo el array `mockTours` */
    req.flush(mockTours);

    /** Verifica que el componente haya recibido y almacenado correctamente los datos */
    expect(component.tours.length).toBe(2); // Confirma que se cargaron 2 elementos
    expect(component.tours).toEqual(mockTours); // Confirma que el contenido recibido es igual al simulado

  });
});
