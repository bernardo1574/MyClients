import { v4 as uuidv4 } from 'uuid';

class ClientInMemory {
  id: string;
  username: string;
  name: string;
  gender: string;
  birth_date: Date;
  age: number;
  created_at: Date;
  updated_at: Date;
  fk_id_city: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { ClientInMemory };
