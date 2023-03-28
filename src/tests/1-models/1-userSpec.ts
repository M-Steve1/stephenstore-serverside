import { UserStore } from '../../models/user';

const userStore = new UserStore();

describe('User model', () => {
  it('Should have an index method', () => {
    expect(userStore.index).toBeDefined();
  });
  it('Should have create method', () => {
    expect(userStore.create).toBeDefined();
  });
  it('Should have show method', () => {
    expect(userStore.show).toBeDefined();
  });
  it('Should have an authenticate method', () => {
    expect(userStore.authenticate).toBeDefined();
  });

  beforeAll(async () => {
    const result = await userStore.create({
      first_name: 'modebe',
      last_name: 'stephen',
      user_name: 'Msteve1',
      password: 'password'
    });
    // @ts-ignore
    expect(result).toEqual({
      id: 1,
      first_name: 'modebe',
      last_name: 'stephen',
      user_name: 'Msteve1'
    });
  });

  it('Index method should not return a null list', async () => {
    const result = await userStore.index();
    expect(result).not.toBeNull();
  });

  it('Show method should return specified(id) user', async () => {
    const result = await userStore.show(1);
    // @ts-ignore
    expect(result).toEqual({
      id: 1,
      first_name: 'modebe',
      last_name: 'stephen',
      user_name: 'Msteve1'
    });
  });

  it(`Should login the user if the details are correct`, async () => {
    const result = await userStore.authenticate('Msteve1', 'password');
    // @ts-ignore
    expect(result).toEqual({
      id: 1,
      first_name: 'modebe',
      last_name: 'stephen',
      user_name: 'Msteve1'
    });
  });
});
