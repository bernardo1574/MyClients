import { v4 as uuidv4 } from 'uuid';

class CityInMemory {
  id: string;
  city: string;
  state: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { CityInMemory };
