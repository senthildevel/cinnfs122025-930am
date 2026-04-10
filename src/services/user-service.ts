import create from "./http-service";

export interface User {
  id: number;
  name: string;
}

// httpservice class object
export default create("/users");
