const twilio = require('twilio');

// Replace these with your actual Twilio credentials
const accountSid = 'AC900521537b1dc1148b9d570c388ea4e0';  // Your Twilio Account SID
const authToken = '34daaeafc5d384dd9284bb37c00c1d2a';    // Your Twilio Auth Token

// Initialize the Twilio client
const client = twilio(accountSid, authToken);

// Send a test SMS
client.messages
  .create({
    body: 'helllooo',                     // The message body
    from: '+12185027297',                  // Your Twilio phone number
    to: '+918233758907'                    // The recipient phone number (must be verified)
  })
  .then(message => {
    console.log('Message SID:', message.sid);  // Log the message SID

    // Fetch the message status using the SID
    client.messages(message.sid)  // Use message.sid, not just sid
      .fetch()
      .then(fetchedMessage => {
        console.log('Message Status:', fetchedMessage.status);  // Log the message status
      })
      .catch(err => console.error('Error fetching message status:', err));
  })
  .catch(err => console.error('Error sending message:', err)); // Log any errors
