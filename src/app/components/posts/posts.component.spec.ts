import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsComponent } from './posts.component';
import { Post } from '../../interfaces/post';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
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
  it('debería cargar los Post con campos válidos desde la URL al inicializarse JSON', () => {

    /** Datos simulados que se devolverán como respuesta a la petición HTTP */
    const mockPosts: Post[] = [
      {
        fecha: '07/06/2025',
        autor: 'Equipo Bahia',
        titulo: '¡Bienvenidos!',
        texto: 'Descubre toda la oferta turística de nuestra región: playas, gastronomía, hospedaje, aventuras y cultura. Este sitio está diseñado para ayudarte a planificar tu próxima escapada. ¡Y no olvides suscribirte a nuestro boletín para recibir novedades y promociones exclusivas!',
        ruta: 'bienvenidos'
      },
      {
        fecha: '07/06/2025',
        autor: 'María González',
        titulo: 'Nueva ruta turística en la costa sur',
        texto: 'El Ministerio de Turismo ha inaugurado una nueva ruta costera con miradores, áreas verdes y acceso a playas escondidas...',
        ruta: 'noticias'
      }
    ];

    /** Ejecuta ngOnInit(), que internamente hace la petición HTTP */
    fixture.detectChanges(); // llama ngOnInit()

    /** Espera que se haya realizado una solicitud HTTP a la URL indicada */
    const req = httpMock.expectOne('https://mautapiao.github.io/jsonbi/posts.json');

    /** Verifica que la solicitud realizada sea de tipo GET */
    expect(req.request.method).toBe('GET');

    /** Simula una respuesta del servidor devolviendo el array `mockPosts` */
    req.flush(mockPosts);

    /** Verifica que el componente haya recibido y almacenado correctamente los datos */
    expect(component.posts.length).toBe(2); // Confirma que se cargaron 2 elementos
    expect(component.posts).toEqual(mockPosts); // Confirma que el contenido recibido es igual al simulado

  });

});
