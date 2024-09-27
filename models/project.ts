export class Project {
    constructor(
      public name: string,
      public description: string,
      public deploymentLink: string | null,
      public githubLink: string | null,
      public imagePath: string,
      public technologies: string[],
      public startDate: Date | null,
      public endDate: Date | null
    ) {}
  }