import { expect } from 'chai'
import { describe, it } from 'mocha'
import { validationUser } from '../src'
import { UserDataBuilder } from './model/UserDataBuilder'

describe('Test Data Builder', () => {

  it('should valid object user not errors', () => {
    const user = UserDataBuilder.aUser().build()
    const result = validationUser(user)
    const expected = {
      errors: [],
      result: true
    }
    expect(result).to.be.deep.equal(expected)
  })

})