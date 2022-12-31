const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()

const eb_venue_id = '119390079'
const eb_url = `https://www.eventbriteapi.com/v3/venues/${eb_venue_id}/events/`

app.listen(port, () => console.log(`Server started on port ${port}`))

fetch(eb_url,{
    headers: {
        Authorization: process.env.EVENTBRITE_OAUTH_TOKEN
    }
})
    .then(res => res.json())
    .then(data => console.log(data))