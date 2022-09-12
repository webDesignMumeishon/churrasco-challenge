// to make the file a module and avoid the TypeScript error
export {}

export type User = {
    id: number,
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}