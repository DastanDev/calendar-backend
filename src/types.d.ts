import { Document, SchemaTimestampsConfig } from "mongoose"

interface MongooseUser extends Document, SchemaTimestampsConfig {
  username: string
  password: string
  isAdmin: string
}
