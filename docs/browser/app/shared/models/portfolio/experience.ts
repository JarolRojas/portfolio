export interface Experience {
  id: string;
  role: string;
  company: string;
  description: string[];
  skills?: string[];
  tools?: string[];
  image?: string;
  startDate: string;
  endDate?: string;
}
