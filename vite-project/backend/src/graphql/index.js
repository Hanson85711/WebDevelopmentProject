import { querySchema, queryResolver } from './query.js'
import { postSchema, postResolver } from './post.js'
export const typeDefs = [querySchema, postSchema]
export const resolvers = [queryResolver, postResolver]

