export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface RegistrationResponse {
  message: string;
  data?: any;
  error?: string;
}
