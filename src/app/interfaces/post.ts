/**
 * Interface que representa los post para pagina princial.
 */
export interface Post {
  /** Fecha de la publicación */
  fecha: string;
  /** Autor de la publicación */
  autor: string;
  /** Titulo de la publicación */
  titulo: string;
  /** Texto de la publicación */
  texto: string;
  /** Ruta a contenido de la noticia */
  ruta: string; 
}