import { User } from "../models/user.model";
import { Map, Record, List } from 'immutable';

export interface AuthState  {
  user: User | null;
}

export const initialState: AuthState = {
  user: null,
};