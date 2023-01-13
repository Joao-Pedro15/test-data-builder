import { IUser, User } from "./entities/User";

export function validationUser(user: Partial<IUser> | any){
  const errors : string[] = []

  if(!['backend', 'frontend', 'fullstack'].includes(user.profession!)){
    errors.push('Invalid profession. Only accept Backend, Frontend or Fullstack')
  }

  if(user.age! < 12) {
    errors.push('Only accepts over 12 years old')
  }

  if(!user.email!.includes('@')){
    errors.push('Invalid email')
  }

  if(user.password!.trim().length <= 0) {
    errors.push('Invalid password')
  }

  return {
    result: errors.length === 0,
    errors 
  }
}