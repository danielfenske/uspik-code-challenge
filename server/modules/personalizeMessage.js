// 'personalizeMessage' takes in the selectedMessage and guest information to dynamically change 
// the selectedMessage to be personable to the guest (ex: goodmorning, Daniel!)
function personalizeMessage(selectedMessage, guestInformation) {

    let personalizedMessage = selectedMessage;

    personalizedMessage = personalizedMessage.replaceAll('#greeting', 'Good morning');
    personalizedMessage = personalizedMessage.replaceAll('#firstName', guestInformation.firstName);
    personalizedMessage = personalizedMessage.replaceAll('#companyName', guestInformation.companyName);
    personalizedMessage = personalizedMessage.replaceAll('#roomNumber', guestInformation.roomNumber);

    return personalizedMessage;
}

module.exports = personalizeMessage;