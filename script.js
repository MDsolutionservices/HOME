// JavaScript functionality for the website

function displayCurrentDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(now);
    console.log(`Current Date and Time (UTC): ${formattedDateTime}`);
}

displayCurrentDateTime();