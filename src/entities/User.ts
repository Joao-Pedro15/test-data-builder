export interface IUser {
  email: string
  password: string
  profession: keyof typeof professions
  age: number
}

const professions = {
  backend: 'Backend',
  frontend: 'Frontend',
  fullstack: 'Fullstack'
}

export class User {
  private readonly email: string
  private readonly password: string
  private readonly age: number
  private readonly profession: keyof typeof professions
  constructor({ email, age, password, profession }: IUser){
    this.email = email
    this.age = age,
    this.password = password
    this.profession = profession
  }
}