import queryTwitterResolvers from "./resolvers/Query"
import tweetTwitterResolver from './resolvers/Tweet';
import userTwitterResolver from './resolvers/User';
import mutationTwitterResolver from './resolvers/Mutation';
import Db from "./db"
import { Resolvers } from "./resolvers-types.generated"
import { DbTweet, DbUser } from "./db"
import trendTwitterResolver from "./resolvers/Trend"
export interface TwitterResolverContext {
  db: Db
  dbTweetCache: Record<string, DbTweet>
  dbUserCache: Record<string, DbUser>
  dbTweetToFavoriteCountMap: Record<string, number>
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolvers,
  Tweet: tweetTwitterResolver,
  User: userTwitterResolver,
  Mutation: mutationTwitterResolver,
  Trend: trendTwitterResolver
}

export default resolvers