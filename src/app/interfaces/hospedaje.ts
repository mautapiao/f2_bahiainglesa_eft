/**
 * Interface que representa la sección de avisos columna derecha
 */
export interface Hospedaje {
  /** Nombre Item */
  nombre: string;
  /** Tipo servicio */
  tipo: 'hotel' | 'hostal' | 'oferta';
  /** Descripción servicios */
  descripcion: string;
  /** Precio servicio por noche, si aplica */
  precioPorNoche?: number; 
  /** Estrellas si aplica */
  estrellas?: number;
  /** Icono servicio */
  icono: string;
  /** Icono color */
  colorIcono: string;
  /** Texto botón acción */
  textoBoton: string;
  /** Color botón acción */
  colorBoton: string;
  /** Define si es oferta especial */
  esOfertaEspecial?: boolean;
  /** Detalle oferta */
  detalleOferta?: string;
}