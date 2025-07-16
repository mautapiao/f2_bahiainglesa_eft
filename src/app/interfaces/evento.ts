/**
 * Interface que representa los eventos destacados  en la sección principal
 */
export interface Evento {
  /** imgane del evento */
  imagen: string;    
  /** descripcion de la imagen */   
  alt: string;          
  /** descripcion evento */
  descripcion: string;  
  /** fecha evento */
  fecha: string;        
  /** fondo linear */
  fondo?: string;      
}