export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  tools?: string[];
  repoUrl?: string;
  liveUrl?: string;
  images?: string[]; // Screenshot or image representing the project
}
