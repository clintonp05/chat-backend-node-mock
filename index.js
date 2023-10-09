var express = require('express');
var app = express();

app.get('/health', function (req, res) {
    res.end( "ok");
});


app.post('/knowledge-base', function (req, res) {
    const data = {
        "id": "db935745-4759-4a73-bb30-4801c678cdab",
        "raw": {
            "MODEL_CONFIDENCE": "0.85",
            "PROBE": "",
            "PROBE_EG": " ",
            "QUERY_INTENT": "Credit Card Services",
            "REFINED_QUERY": "Which Emirates NBD credit card offers concierge services",
            "SYSTEM_SENTIMENT": "Neutral",
            "USER_SENTIMENT": "Neutral"
        },
        "refinedQuery": "Which Emirates NBD credit card offers concierge services",
        "responses": [
            {
                "modelConfidence": "0.85",
                "probe": "",
                "probeExample": " ",
                "queryIntent": "Credit Card Services",
                "refinedQuery": "Which Emirates NBD credit card offers concierge services",
                "systemSentiment": "Neutral",
                "userSentiment": "Neutral"
            }
        ]
    }
    res.setHeader('Content-Type', 'application/json');
    setTimeout( ()=>{
        res.end( JSON.stringify(data) );
    },5000)
});

app.put('/knowledge-base/1', function (req, res) {
    console.log("PUT request received")
    const data = {
        "answer": [
            {
                "ai_response": "[gpt-4]\nThe U By Emaar Visa Infinite credit card and U By Emaar Signature card credit card offer UPoints on spends, which can be redeemed at various Emaar entities, potentially including the Dubai Ice Rink. However, I would recommend checking the specific terms and conditions of these cards to confirm if the Dubai Ice Rink is included in the list of eligible venues. \n\nWould you like more information on how to earn and redeem UPoints with these cards?\n\n[gpt-3.5-turbo]\nError",
                "context": [
                    "Emirates NBD Credit Card Application Process:",
                    "Etihad Guest Visa Elevate credit card- Here are the key features and benefits of this card: 1. Earn 10 Etihad Guest Miles per AED 10 spent on Etihad Airways, hotels, and dining. 2",
                    "Etihad Guest Visa Inspire credit card– Here are the key features and benefits of this card: 1. Earn 7 Etihad Guest Miles per AED 10 spent on Etihad Airways, hotels, and dining. 2",
                    "Q3: Which EmiratesNBD cards have complimentary airport lounge access? Ans: Below Emirates NBD credit cards offer complimentary airport lounge access",
                    "3. U By Emaar Signature card credit card - Enjoy complimentary airport lounge access to over 1000 lounges worldwide via LoungeKey.",
                    "Q1: For monthly income of AED 15,000 which credit cards is customer eligible for? Ans: Below credit cards are eligible: 1. Etihad Guest Visa Elevate: AED 12,000.",
                    ". 8. Skywards Infinite credit card: AED 30,000. Please note that these are the minimum income requirements and actual eligibility will depend on a comprehensive evaluation of your financial profile.",
                    "U By Emaar Visa Infinite credit card: Here are the key features and benefits of this card: 1. Earn UPoints on spends: 7.5% on all Emaar spends and 1.5% on all other spends. 2",
                    ". 6. U By Emaar Visa Family credit card: AED 5,000. 7. Skywards Signature credit card: AED 12,000. 8. Skywards Infinite credit card: AED 30,000",
                    "U By Emaar Signature card credit card: Here are the key features and benefits of this card: 1. Earn UPoints on spends: 6.25% on all Emaar spends and 1.25% on all other spends. 2"
                ],
                "model": "openai",
                "sources": [
                    "/content/drive/MyDrive/dataset_16092023/Knowledge_base/CC Master V7.pdf",
                    "/content/drive/MyDrive/dataset_16092023/Knowledge_base/QA.pdf"
                ],
                "tokens_used": 851
            }
        ]
    }
    res.setHeader('Content-Type', 'application/json');
    setTimeout( ()=>{
        res.end( JSON.stringify(data) );
    },8000)
});

var server = app.listen(8081, '127.0.0.1' ,function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})