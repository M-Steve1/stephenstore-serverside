import client from '../database';
import { hashSync, compare } from 'bcrypt';
import envVariables from '../config';

const { pepper, saltRounds } = envVariables;

export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const { data, error, status } = await client.from('users').select();
      return data as User[];
    } catch (error) {
      throw new Error(`Cannot fetch users ${error}`);
    }
  }

  async create(u: User): Promise<User | null> {
    try {
      const hashedPassword = hashSync(
        u.password + pepper,
        parseInt(saltRounds)
      );
      // fName and lName to lowercase to allow naming consistency
      const { data, error, status } = await client
        .from('users')
        .insert({
          first_name: u.first_name.toLowerCase(),
          last_name: u.last_name.toLowerCase(),
          user_name: u.user_name,
          password: hashedPassword
        })
        .select()
        .single();

      if (data !== null) {
        delete data.password;
        return data as User;
      } else return null;
    } catch (error) {
      throw new Error(`Cannot create user ${error}`);
    }
  }

  async show(id: number): Promise<User | null> {
    try {
      const { data, error, status } = await client
        .from('users')
        .select()
        .eq('id', id)
        .single();

      if (data !== null) {
        delete data.password;
        return data as User;
      } else return null;
    } catch (error) {
      throw new Error(`Cannot find user ${error}`);
    }
  }

  async authenticate(
    user_name: string,
    password: string
  ): Promise<User | null> {
    try {
      const { data, error, status } = await client
        .from('users')
        .select()
        .eq('user_name', user_name);

      if (data !== null) {
        const user = data[0];
        const correctPassword = await compare(password + pepper, user.password);
        if (correctPassword) {
          delete user.password;
          return user as User;
        } else {
          throw new Error();
        }
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Something went wrong`);
    }
  }
}
