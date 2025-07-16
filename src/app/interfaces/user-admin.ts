/**
 * Interface que representa a los usuarios para efectos de aministrador
 */
export interface UserAdmin {
  /** id autoincremento */
  id: number;
  /** correo del usuario */
  email: string;
  /** nombre de usuario */
  username: string;
  /** nombre completo del usuario */
  fullName: string;
  /** rol del usuario */
  role: 'ADMIN' | 'USER' | string;
  /** rol clase para estilo */
  roleClass: string;
  /** fecha de creación cuenta */
  createdAt: string;
  /** estado de la cuenta  */
  status: 'Activo' | 'Inactivo' | string;
  /** clase css status */
  statusClass: string;
  /** link para editar usuario */
  profileLink: string;
}