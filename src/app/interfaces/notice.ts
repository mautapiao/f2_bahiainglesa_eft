/**
 * Interface que representa los post o noticias
 */
export interface Notice {
  /** id numerico autoincremento */
  id: number;
  /** titulo de la noticia */
  title: string;
  /** descripcion noticia */
  description: string;
  /** Activo o no */
  isActive: boolean;
}