/**
 * Interface que representa la lista de restaurantes en la sección principal
 */
export interface Restaurante {
  /** nombre del restaurant */
  nombre: string;
  /** descripcion del servicio */
  descripcion: string;
  /** ciudad restaurant */
  ciudad: string;
  /** imagen local */
  imagen: string;
  /** link instagram */
  instagram: string;
}