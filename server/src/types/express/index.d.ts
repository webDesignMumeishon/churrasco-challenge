// to make the file a module and avoid the TypeScript error
import {UserContext} from '../user'

declare global {
  namespace Express {
    interface Request {
      user?: UserContext;
    }
  }
}