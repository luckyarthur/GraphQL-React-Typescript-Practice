"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transforms_1 = require("../transforms");
const transforms_2 = require("../transforms");
const mutationTwitterResolver = {
    async createTweet(_parent, args, { dbTweetCache, db }) {
        const { body, userId } = args;
        const dbTweet = await db.createTweet({
            message: body,
            userId,
        });
        const dbTweetMap = (dbTweetCache || (dbTweetCache = {}));
        dbTweetMap[dbTweet.id] = dbTweet;
        return (0, transforms_1.tweetTransform)(dbTweet);
    },
    async createFavorite(_parent, args, { db }) {
        const { favorite } = args;
        const fav = await db.createFavorite(favorite);
        return {
            ...(0, transforms_2.favoriteTransform)(fav),
            user: db.getUserById(fav.userId),
            tweet: (0, transforms_1.tweetTransform)(db.getTweetById(fav.tweetId)),
        };
    },
    async deleteFavorite(_parent, args, { db }) {
        const { favorite } = args;
        const fav = await db.deleteFavorite(favorite);
        return {
            ...(0, transforms_2.favoriteTransform)(fav),
            user: db.getUserById(fav.userId),
            tweet: (0, transforms_1.tweetTransform)(db.getTweetById(fav.tweetId)),
        };
    },
};
exports.default = mutationTwitterResolver;
