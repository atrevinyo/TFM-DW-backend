

export class CreateActivitatDto {
    nom: string;
    descripcio: string;
    data: string;
    competencies: { codi: string; nom: string; descripcio: string }[];
  }
