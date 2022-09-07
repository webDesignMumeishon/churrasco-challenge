import User, {UserContext} from "./user";

declare global {
  namespace Express {
    export interface Request {
      user?: UserContext
    }
  }
}
