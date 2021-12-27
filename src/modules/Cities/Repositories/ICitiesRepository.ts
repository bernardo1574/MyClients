export interface ICitiesDTO {
  city: string;
  state: string;
}

export interface ICities {
  id: string;
  city: string;
  state: string;
}

export interface ICitieRepository {
  createCity(city: ICitiesDTO): Promise<void>;
  listCitiesState(state: string): Promise<ICities[]>;
  listCity(id: string): Promise<ICities>;
}
