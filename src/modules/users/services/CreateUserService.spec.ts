import 'reflect-metadata';
import AppError from '@shared/errors/AppError';

import CreateUserService from './CreateUserService';
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('UserAppointment', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with the same email address', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );

    const userEmail = 'johndoe@example.com';

    await createUser.execute({
      name: 'John Doe',
      email: userEmail,
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: userEmail,
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});