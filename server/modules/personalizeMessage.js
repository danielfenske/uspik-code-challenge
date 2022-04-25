// 'personalizeMessage' takes in the selectedMessage and guest information to dynamically change 
// the selectedMessage to be personable to the guest (ex: goodmorning, Daniel!)
function personalizeMessage(selectedMessage, guestInformation) {

    let personalizedMessage = selectedMessage;

    let greeting = determineTimeOfDay(guestInformation.startTimestamp);

    personalizedMessage = personalizedMessage.replaceAll('#greeting', greeting);
    personalizedMessage = personalizedMessage.replaceAll('#firstName', guestInformation.firstName);
    personalizedMessage = personalizedMessage.replaceAll('#companyName', guestInformation.companyName);
    personalizedMessage = personalizedMessage.replaceAll('#roomNumber', guestInformation.roomNumber);

    return personalizedMessage;
}


// 'determineTimeOfDay' converts epoch to human-readable date,
// then creates string depending on when the time of day is
function determineTimeOfDay(number) {
    let timeOfDay = new Date(number * 1000);

    timeOfDay = timeOfDay.toLocaleString();

    // console.log('timeOfDay', timeOfDay);

    let greeting = '';

    if (timeOfDay.includes('AM')) {
        greeting = 'Good morning'

    } else if (timeOfDay.includes('PM')) {
        greeting = 'Good evening'
    } else {
        console.log('something is wrong');
    }

    return greeting;
}


module.exports = personalizeMessage;