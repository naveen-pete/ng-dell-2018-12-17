export class Product {
  name: string;

  printName() {
    console.log(this.name);
  }
}

export interface IProduct {
  printName();
}