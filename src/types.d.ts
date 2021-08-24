import { Document, SchemaTimestampsConfig } from "mongoose"

interface User {
  id: number
  firstName: string
  lastName:string
  password: string
  email :string
  isAdmin : boolean
}

declare global {
  namespace Express {
    interface Request {
      user: User
    }
  }
}
