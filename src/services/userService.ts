import client from '../database';
import jwt from 'jsonwebtoken';
import env from '../config';

const { jwtSecret } = env;

export class UserService {
  async isUserNameTaken(user_name: string): Promise<boolean> {
    let conn;
    try {
      const sql = 'SELECT user_name FROM users';
      conn = await client.connect();
      const result = await conn.query(sql);
      const userNames = result.rows;
      let isTaken = false;
      for (let i = 0; i < userNames.length; i++) {
        if (user_name === userNames[i].user_name) {
          isTaken = true;
          break;
        }
      }
      return isTaken;
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    } finally {
      if (conn !== undefined) {
          conn.release();
      }
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
