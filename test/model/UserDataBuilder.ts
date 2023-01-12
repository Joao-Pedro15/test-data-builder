import { IUser, User } from '../../src/entities/User'

class UserDataBuilder {
  private readonly userData: IUser
  constructor() {
    this.userData = {
      age: 19,
      email: 'jjoao.monteiro15@gmail.com',
      password: '123123',
      profession: 'backend'
    }
  }

  static aUser() {
    return new UserDataBuilder()
  }

  withInvalidEmail() {
    this.userData.email = this.userData.email.replace('@', '')
    return this
  }
}