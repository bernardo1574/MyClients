interface IClientDTO {
  username: string;
  name: string;
  gender: string;
  birth_date: Date;
  age: number;
  fk_id_city: string;
}
interface IClient {
  id: string;
  username: string;
  name: string;
  gender: string;
  birth_date: Date;
  age: number;
  created_at: Date;
  updated_at: Date;
  fk_id_city: string;
  city?: {
    city: string;
    state: string;
  };
}

interface IClientRepository {
  listCLientUsername(username: string): Promise<IClient>;
  listCLientName(name: string): Promise<IClient[]>;
  listClientId(id: string): Promise<IClient>;
  createClient(client: IClientDTO): Promise<void>;
  updateClient(name: string, id: string): Promise<void>;
  deleteClient(id: string): Promise<void>;
}

export { IClientRepository, IClient, IClientDTO };
