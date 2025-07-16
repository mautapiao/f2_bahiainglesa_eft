import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../interfaces/post';
/**
 * Componente que muestra la sección de posts en la página principal
 */
@Component({
  selector: 'app-posts',
  imports: [RouterModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  /** Lista de post destacados para mostrar  */
  posts: Post[] = [];

  /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.
   */
  ngOnInit(): void {

    // Realizamos una solicitud HTTP GET al archivo JSON que contiene los post
    this.http.get<Post[]>('https://mautapiao.github.io/jsonbi/posts.json')
      .subscribe({
        // next: Se ejecuta cuando la petición es exitosa
        next: (data) => {
          // Asignamos los datos recibidos a la propiedad post del componente
          this.posts = data;
        },
        // error: Se ejecuta cuando hay un error en la petición
        error: (error) => {
          // Mostramos el error en la consola para debugging
          console.log('Error:', error);
        }
      });
  }

}