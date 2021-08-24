import { genSalt, hash } from "bcryptjs"

const hashPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(10)
  return hash(password, salt)
}

export default hashPassword
