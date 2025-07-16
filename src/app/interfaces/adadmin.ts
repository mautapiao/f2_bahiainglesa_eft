/**
 * Interface que representa los ads
 */
export interface AdAdmin {
  /** id numerico autoincremento */
  id: number;
  /** Fecha de registro del anuncio */
  createdAt: string;
  /** Usuario y correo */
  user: {
    /** nombre de usaurio */
    name: string;
    /** email usuario */
    email: string;
  };
  /** Categoría de anuncio */
  category: string;
  /** Imagen del anuncio */
  imageUrl: string;
  /** Fecha de incio anuncio */
  startDate: string;
  /** Fecha fin de anuncio */
  endDate: string;
  /** Descripción de anuncio */
  description: string;
  /** Valor Costo del anuncio */
  amount: number;
  /** Si el anuncio fue aprovado  */
  isApproved: boolean;
  /** Ruta de la edición */
  editLink: string;
  /** Indica si el registro esta activo */
  active: boolean;
}