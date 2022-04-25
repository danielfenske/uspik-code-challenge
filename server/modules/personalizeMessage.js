// 'personalizeMessage' takes in the selectedMessage and guest information to dynamically change 
// the selectedMessage to be personable to the guest (ex: goodmorning, Daniel!)
function personalizeMessage(selectedMessage, guestInformation) {

    let personalizedMessage = selectedMessage;

    personalizedMessage = personalizedMessage.replace('#greeting', 'Good morning');
    personalizedMessage = personalizedMessage.replace('#firstName', guestInformation.firstName);
    personalizedMessage = personalizedMessage.replace('#companyName', guestInformation.companyName);
    personalizedMessage = personalizedMessage.replace('#roomNumber', guestInformation.roomNumber);

    return personalizedMessage;
}

module.exports = personalizeMessage;