/**
 * Interface que define los ads del cliente
 */
export interface Ad {
  /** id numerico auto incremento */
  id: number;
  /** fecha envío (YYYY-MM-DD) */
  sendDate: string; 
  /** categoría (Restaurant, Evento, Tour)  */ 
  category: string;    
  /** ruta imagen */
  imageSrc: string;   
  /** fecha desde */
  startDate: string;
  /** fecha hasta */
  endDate: string;   
  /** Comentario Ad */    
  comment: string;
  /** Url objetivo */
  url: string;
  /** con formato string, ej. '$120.000' */
  cost: string;      
  /** true = Sí, false = No  */
  paid: boolean;         
}