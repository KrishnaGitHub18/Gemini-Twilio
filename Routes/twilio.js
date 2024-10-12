const axios = require('axios');
const express = require('express');
const router = express.Router();
const { MessagingResponse } = require('twilio').twiml;
require('dotenv').config();  

router.post('/twilio', async (req, res) => {

    try {
        
        const que = req.body.Body;
        console.log(que);
        
        const twiml = new MessagingResponse();

        const ans = await axios.post(process.env.API_URL, {que});
        console.log(ans.data);
        twiml.message(ans.data);

        res.type('text/xml');
        res.status(200).send(twiml.toString());

    } catch (error) {
        console.error("Error generating AI content:", error);
        res.status(500).send("An error occurred.");
    }
});

module.exports = router;