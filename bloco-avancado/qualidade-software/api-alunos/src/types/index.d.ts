declare namespace Express {
  interface Request {
    authUser: {
      id: string;
      nome: string;
      email: string;
      idade: number;
    };
  }
}
