const axios = require('axios');

function handleMessage(sender_psid, message) {
    console.log('handleMessage', message);

    const payload = {
        recipient: {
            id: sender_psid
        },
        message: {
            text: sender_psid + ' said: ' + message.text,
        }
    };

    const config = {
        params: {
            access_token: 'EAAQa13AfiDwBAGWKkj4a7ZAcpdOv0xrLdvFdzQOyej1cgMnxLvG0z9csOAJ4fMSSkCKZC2Mj4STUniYfqz5hZBhXspCoxxYKlXUlnb3ywVCYgjR337pPv959AQaMk9vD5r0bdPWEmy4xNF5cvjIIg3hdY5JOdGuF9Q08DWbmgZDZD'
        }
    };

    axios.post('https://graph.facebook.com/v2.6/me/messages',
        payload,
        config,
    ).then(res => {
        console.log('message sent', res);
    }).catch(err => {
        console.log('message error', err.response.data.error.message);
        console.log('message error', err);
    });
}


function handlePostback(sender_psid, postback) {
    console.log('handlePostback', postback);
}

module.exports = {
    handleMessage,
    handlePostback
}