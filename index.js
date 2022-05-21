require('dotenv').config()
const {TwitterClient} = require('twitter-api-client')
const axios = require('axios')

const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

let tweet
tweet = "Sent through Twitter API #api #twitterapi #botapi #bot #bottwitter"

twitterClient.tweets.statusesUpdate({
     status: tweet
}).then (response => {
     console.log("Tweeted!", response)
}).catch(err => {
    console.log("Error! You are probably rate limited! Or you already said that")
})