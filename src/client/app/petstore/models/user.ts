export class User {
  [key:string]: any;
  username: string;
  authorities: Array<string>;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}