import { UserService } from '../../services/userService';

const userService = new UserService();

describe('User service', () => {
  it('Should return true if the user name is taken', async () => {
    const isTaken = await userService.isUserNameTaken('Msteve1');
    expect(isTaken).toBe(true);
  });
  it('Should return a token and not an empty string', async () => {
    const token = await userService.createToken({ userId: '1' });
    expect(token).not.toEqual(" ");
  });
});
