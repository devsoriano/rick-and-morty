//Interfaces
export interface IResult {
  air_date?: string;
  characters?: TCharacter[];
  episode?: string;
  id?: number;
  name?: string;
  posterMin?: string;
  posterMax?: string;
}

//Types
export type TCharacter = string;

export type TEpisode = {
  info: TInfo;
  results: IResult[];
};

export type TInfo = {
  pages: number;
};
