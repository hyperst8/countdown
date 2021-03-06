// Defining id elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Function to get time difference between target date and current date
const getTimeDifference = (targetDate) => {
    let diff = targetDate.getTime() - Date.now();

    // When count down is finished
    if (diff < 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    // Convert to miliseconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(diff / (1000 * 60) % 60);
    const seconds = Math.floor(diff / 1000) % 60;

    return { days, hours, minutes, seconds };
};

// Update and display date and time
const updateTime = (targetDate) => {
    const { days, hours, minutes, seconds } = getTimeDifference(targetDate);
    daysElement.innerText = days;
    hoursElement.innerText = hours.toString().padStart(2, "0");
    minutesElement.innerText = minutes.toString().padStart(2, "0");
    secondsElement.innerText = seconds.toString().padStart(2, "0");
};

// Set target date and update every second
const targetDate = new Date("2020-08-01 09:00:00");
updateTime(targetDate);
setInterval(updateTime, 1000, targetDate);