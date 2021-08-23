import JWT from "jsonwebtoken"

type GenToken = (id: string) => string

const genToken: GenToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 604800, // 7 days
  })
}

export default genToken
