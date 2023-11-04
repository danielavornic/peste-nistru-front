export interface User {
  id: number;
  email?: string;
  name?: string;
  surname?: string;
  phone?: string;
  token?: string;
  hasMPass?: boolean;
  location?: string;
}
