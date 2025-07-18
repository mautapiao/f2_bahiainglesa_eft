import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RightColumnComponent } from './right-column.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Hospedaje } from '../../interfaces/hospedaje';


describe('RightColumnComponent', () => {
  let component: RightColumnComponent;
  let fixture: ComponentFixture<RightColumnComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightColumnComponent, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RightColumnComponent);
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
  it('debería cargar los hospedajes con campos válidos desde la URL al inicializarse JSON', () => {

    /** Datos simulados que se devolverán como respuesta a la petición HTTP */
    const mockHospedajes: Hospedaje[] = [
      {
        nombre: 'Hotel Bahia Resort',
        tipo: 'hotel',
        descripcion: 'Lujo frente al mar con todas las comodidades',
        precioPorNoche: 199,
        estrellas: 5,
        icono: 'fas fa-hotel',
        colorIcono: 'text-primary',
        textoBoton: 'Reservar Ahora',
        colorBoton: 'btn-primary'
      },
      {
        nombre: 'Hostal Aventurero',
        tipo: 'hostal',
        descripcion: 'Económico y acogedor para viajeros',
        precioPorNoche: 45,
        estrellas: 4,
        icono: 'fas fa-bed',
        colorIcono: 'text-warning',
        textoBoton: 'Ver Disponibilidad',
        colorBoton: 'btn-gold'
      },
      {
        nombre: 'Oferta Especial',
        tipo: 'oferta',
        descripcion: '¡Reserva 3 noches y obtén 1 gratis!',
        icono: 'fas fa-gift',
        colorIcono: '',
        textoBoton: 'Aprovechar Oferta',
        colorBoton: 'btn-light',
        esOfertaEspecial: true,
        detalleOferta: 'Reserva 3 noches y obtén 1 gratis'
      }
    ];

    /** Ejecuta ngOnInit(), que internamente hace la petición HTTP */
    fixture.detectChanges(); // llama ngOnInit()

    /** Espera que se haya realizado una solicitud HTTP a la URL indicada */
    const req = httpMock.expectOne('https://mautapiao.github.io/jsonbi/hospedajes.json');

    /** Verifica que la solicitud realizada sea de tipo GET */
    expect(req.request.method).toBe('GET');

    /** Simula una respuesta del servidor devolviendo el array `mockTHospedajes` */
    req.flush(mockHospedajes);

    /** Verifica que el componente haya recibido y almacenado correctamente los datos */
    expect(component.hospedajes.length).toBe(3); // Confirma que se cargaron 3 elementos
    expect(component.hospedajes).toEqual(mockHospedajes); // Confirma que el contenido recibido es igual al simulado

  });

});
