export class Pet {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
