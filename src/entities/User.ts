export interface IUser {
  email: string
  password: string
  profession: keyof typeof professions
  language: string
}

const professions = {
  backend: 'Backend',
  frontend: 'Frontend',
  fullstack: 'Fullstack'
}

export class User {
  private readonly email: string
  private readonly password: string
  private readonly language: string
  private readonly profession: keyof typeof professions
  constructor({ email, language, password, profession }: IUser){
    this.email = email
    this.language = language,
    this.password = password
    this.profession = profession
  }
}