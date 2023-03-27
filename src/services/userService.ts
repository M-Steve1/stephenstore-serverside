import  client  from '../database';
import jwt from 'jsonwebtoken';
import env from '../config';

const { jwtSecret } = env;

export class UserService {
  async isUserNameTaken(user_name: string): Promise<boolean | null> {
    try {
      const { data, error, status} = await client
      .from('users')
      .select("user_name")
      .eq("user_name", user_name);

      if (data !== null) {
        if (data.length === 0) return false
        else return true
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    }
  }

  async createToken(payload: object): Promise<string> {
    try {
      const token = jwt.sign(payload, jwtSecret as string, {
        expiresIn: '1hr'
      });
      return token;
    } catch (error) {
      throw new Error(`Could not create token ${error}`);
    }
  }
}
