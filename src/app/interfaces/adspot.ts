/**
 * Interface que representa los valores de los avisos 
 */
export interface AdSpot {
  /** id numerico autoincremento */
  id: number;
  /** nombre de categoria */
  category: string;
  /** tamaño publicacion */
  size: string;
  /** localizacion en pantalla */
  location: string;
  /** precio diario */
  dailyPrice: string;
  /** precio semanal */
  weeklyPrice: string;
  /** precio mensual */
  monthlyPrice: string;
  /** precio anual */
  annualPrice: string;
  /** descripcion plan */
  description: string;
}
