export interface Education {
  id: string;
  institution: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  image?: string; // Logo of the institution
  certificateLink?: string; // Link to the certificate or diploma
}
