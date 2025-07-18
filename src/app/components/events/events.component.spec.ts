import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventsComponent } from './events.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Evento } from '../../interfaces/evento';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsComponent, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventsComponent);
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
  it('debería cargar los Eventos con campos válidos desde la URL al inicializarse JSON', () => {

    /** Datos simulados que se devolverán como respuesta a la petición HTTP */
    const mockEventos: Evento[] = [
      {
        imagen: 'img/festival_xii_banner.png',
        alt: 'Festival XII',
        descripcion: 'Anunciamos que se abrirán convocatorias para la edición 2026 del Festival Internacional de Gastronomía de Bahía Inglesa, revisa nuestras redes sociales para mayor información.',
        fecha: 'Verano 2026'
      },
      {
        imagen: 'img/copa_bahia.png',
        alt: 'Copa Bahía',
        descripcion: 'Atacama se prepara para la Copa Bahía Inglesa 2024: natación, canotaje polinésico y stand up paddle protagonizan esta fiesta deportiva con identidad regional.',
        fecha: 'Noviembre 2025',
        fondo: 'linear-gradient(135deg, #16A085, #1ABC9C)'
      }
    ];

    /** Ejecuta ngOnInit(), que internamente hace la petición HTTP */
    fixture.detectChanges(); // llama ngOnInit()

    /** Espera que se haya realizado una solicitud HTTP a la URL indicada */
    const req = httpMock.expectOne('https://mautapiao.github.io/jsonbi/eventos.json');

    /** Verifica que la solicitud realizada sea de tipo GET */
    expect(req.request.method).toBe('GET');

    /** Simula una respuesta del servidor devolviendo el array `mockEventos` */
    req.flush(mockEventos);

    /** Verifica que el componente haya recibido y almacenado correctamente los datos */
    expect(component.eventos.length).toBe(2); // Confirma que se cargaron 2 elementos
    expect(component.eventos).toEqual(mockEventos); // Confirma que el contenido recibido es igual al simulado

  });
});
