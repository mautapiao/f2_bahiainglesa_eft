/**
 * Interface que representa un tour destacado mostrado en la sección principal
 */
export interface Aviso {
   
  /** Clase CSS del ícono FontAwesome */
  icono: string;

  /** Titulo para el tour o nombre de la empresa */
  titulo: string;

  /** Detalle básico del tour ofrecido */
  descripcion: string;

  /** boton leyenda */
  btnTexto: string;

  /** estilo header css */
  headerStyle: string;

}

