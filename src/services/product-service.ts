import create from "./http-service";

export interface Product {
  id: number;
  name: string;
  price: number;
}

// httpservice class object
export default create("/products");
