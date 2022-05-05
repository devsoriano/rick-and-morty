//Interfaces
export interface ICharacter {
  gender?: number;
  name?: string;
  image?: string;
  location?: [
    {
      name?: string;
    }
  ];
  origin?: [
    {
      name?: string;
    }
  ];
  species?: string;
  status?: string;
  type?: string;
}
