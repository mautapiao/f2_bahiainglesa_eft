/**
 * Interface que representa ulas categorias de avisos
 */
export interface Category {
  /** id numerico autoincremento */
  id: number;
  /** nombre de la categoria */ 
  name: string;
  /** descripción de la categoría */
  description: string;
  /** activo o no */
  isActive: boolean;
}