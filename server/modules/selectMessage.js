// selectMessage randomly picks one of the message templates from an array
// and selects that one as the message that will be sent to the guest
    // purpose: promotes variety in messages a guest may receive; keeps things unpredictable
function selectMessage(messageTemplates) {
    for (let i = 0; i < messageTemplates.length; i++) {

        const randomIndex = Math.floor(Math.random() * messageTemplates.length);

        const selectedMessage = messageTemplates[randomIndex];

        return selectedMessage.message;
    }
}

module.exports = selectMessage;