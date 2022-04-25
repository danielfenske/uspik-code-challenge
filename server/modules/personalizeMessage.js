// 'personalizeMessage' takes in the selectedMessage and guest information to dynamically change 
// the selectedMessage to be personable to the guest (ex: goodmorning, Daniel!)
function personalizeMessage(selectedMessage, guestInformation) {

    let personalizedMessage = selectedMessage;

    // 'determineTimeOfDay' is a helper function that returns greeting text relevant to the guest's check-in time
        // ex: 'Good morning'
    let greetingText = determineTimeOfDay(guestInformation.startTimestamp);

    // the four lines below replace variables within the template with information relevant to the guest
    personalizedMessage = personalizedMessage.replaceAll('#greeting', greetingText);
    personalizedMessage = personalizedMessage.replaceAll('#firstName', guestInformation.firstName);
    personalizedMessage = personalizedMessage.replaceAll('#companyName', guestInformation.companyName);
    personalizedMessage = personalizedMessage.replaceAll('#roomNumber', guestInformation.roomNumber);

    return personalizedMessage;
}


// 'determineTimeOfDay' converts epoch to human-readable date,
// then creates string depending on when the time of day is
function determineTimeOfDay(number) {

    // REF: https://stackoverflow.com/questions/13244939/javascript-to-output-text-based-on-users-current-time
    let timeOfDay = new Date(number * 1000).getHours();

    console.log('timeOfDay', timeOfDay);

    let greetingText = '';

    if (timeOfDay < 12) {
        greetingText = 'Good morning';
    } else if (timeOfDay < 18) {
        greetingText = 'Good afternoon';
    } else {
        greetingText = 'Good evening';
    }

    return greetingText;
}


module.exports = personalizeMessage;