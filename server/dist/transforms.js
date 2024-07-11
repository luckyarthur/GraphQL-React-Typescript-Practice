"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweetTransform = exports.favoriteTransform = exports.trendTransform = void 0;
const trendTransform = (t) => {
    const { tweetCount } = t;
    if (t.kind === "topic") {
        const { topic, quote } = t;
        return { tweetCount, topic, quote };
    }
    else {
        const { hashtag } = t;
        return { tweetCount, hashtag };
    }
};
exports.trendTransform = trendTransform;
const favoriteTransform = (t) => {
    return {
        id: t.id,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
    };
};
exports.favoriteTransform = favoriteTransform;
const tweetTransform = (t) => {
    return {
        id: t.id,
        body: t.message,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
    };
};
exports.tweetTransform = tweetTransform;
