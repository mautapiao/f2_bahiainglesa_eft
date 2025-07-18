import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AvisosComponent } from './avisos.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Aviso } from '../../interfaces/aviso';

describe('AvisosComponent', () => {
  let component: AvisosComponent;
  let fixture: ComponentFixture<AvisosComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisosComponent, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvisosComponent);
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
  it('debería cargar los Avisos con campos válidos desde la URL al inicializarse JSON', () => {

    /** Datos simulados que se devolverán como respuesta a la petición HTTP */
    const mockAvisos: Aviso[] = [
      {
        icono: 'fa-regular fa-building',
        titulo: 'Tú empresa puede estar aquí',
        descripcion: 'Pública en nuestro sitio',
        btnTexto: 'Ver publicidad',
        headerStyle: 'background: linear-gradient(135deg, #3498DB, #2980B9);'
      },
      {
        icono: 'fa-regular fa-lightbulb',
        titulo: 'Tú emprendimiento puede estar aquí',
        descripcion: 'Pública en nuestro sitio',
        btnTexto: 'Ver publicidad',
        headerStyle: 'background: linear-gradient(135deg, #27AE60, #229954);'
      }
    ];

    /** Ejecuta ngOnInit(), que internamente hace la petición HTTP */
    fixture.detectChanges(); // llama ngOnInit()

    /** Espera que se haya realizado una solicitud HTTP a la URL indicada */
    const req = httpMock.expectOne('https://mautapiao.github.io/jsonbi/avisos.json');

    /** Verifica que la solicitud realizada sea de tipo GET */
    expect(req.request.method).toBe('GET');

    /** Simula una respuesta del servidor devolviendo el array `mockAvisos` */
    req.flush(mockAvisos);

    /** Verifica que el componente haya recibido y almacenado correctamente los datos */
    expect(component.avisos.length).toBe(2); // Confirma que se cargaron 2 elementos
    expect(component.avisos).toEqual(mockAvisos); // Confirma que el contenido recibido es igual al simulado

  });

});
