export interface Project {
  name: string;
  description: string;
  deploymentLink: string | null;
  githubLink: string | null;
  imagePaths: string[];
  technologies: string[];
  startDate: string | null; // Changed to string
  endDate: string | null; // Changed to string
}