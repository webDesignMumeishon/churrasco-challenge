import User, {UserContext} from "./user";

declare global {
  namespace Express {
    interface Request {
      user?: UserContext
    }
  }
}

