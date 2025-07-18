import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyAdsComponent } from './my-ads.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Ad } from '../../../interfaces/ad';

describe('MyAdsComponent', () => {
  let component: MyAdsComponent;
  let fixture: ComponentFixture<MyAdsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAdsComponent, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyAdsComponent);
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
  it('debería cargar los Ads con campos válidos desde la URL al inicializarse JSON', () => {

    /** Datos simulados que se devolverán como respuesta a la petición HTTP */
    const mockAds: Ad[] = [
      {
        id: 1,
        sendDate: '2025-10-15',
        category: 'Restaurant',
        imageSrc: 'img/elplateado.png',
        startDate: '2025-11-01',
        endDate: '2025-12-31',
        comment: 'Promoción de verano',
        url: '#',
        cost: '$120.000',
        paid: true
      },
      {
        id: 2,
        sendDate: '2025-10-14',
        category: 'Evento',
        imageSrc: 'img/copa_bahia.png',
        startDate: '2025-11-15',
        endDate: '2025-11-20',
        comment: 'Festival de música',
        url: '#',
        cost: '$80.000',
        paid: false
      },
      {
        id: 3,
        sendDate: '2025-10-13',
        category: 'Evento',
        imageSrc: 'img/festival_xii.png',
        startDate: '2025-12-01',
        endDate: '2025-12-10',
        comment: 'Tour por playas',
        url: '#',
        cost: '$150.000',
        paid: true
      },
      {
        id: 4,
        sendDate: '2025-10-13',
        category: 'Tour',
        imageSrc: 'img/playas.png',
        startDate: '2025-12-01',
        endDate: '2025-12-10',
        comment: 'Tour por playas',
        url: '#',
        cost: '$150.000',
        paid: true
      }
    ];

    /** Ejecuta ngOnInit(), que internamente hace la petición HTTP */
    fixture.detectChanges(); // llama ngOnInit()

    /** Espera que se haya realizado una solicitud HTTP a la URL indicada */
    const req = httpMock.expectOne('https://mautapiao.github.io/jsonbi/ads.json');

    /** Verifica que la solicitud realizada sea de tipo GET */
    expect(req.request.method).toBe('GET');

    /** Simula una respuesta del servidor devolviendo el array `mockAds` */
    req.flush(mockAds);

    /** Verifica que el componente haya recibido y almacenado correctamente los datos */
    expect(component.ads.length).toBe(4); // Confirma que se cargaron 4 elementos
    expect(component.ads).toEqual(mockAds); // Confirma que el contenido recibido es igual al simulado

  });




});
