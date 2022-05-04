//Interfaces
export interface ICharacter {
  gender?: number;
  name?: string;
  image?: string;
  location?: TLocation[];
  origin?: TOrigin[];
  species?: string;
  status?: string;
  type?: string;
}

//Types
export type TLocation = {
  name: string;
};

export type TOrigin = {
  name: string;
};
