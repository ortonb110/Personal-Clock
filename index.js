function showTime() {
    let appendHour = document.getElementById("displayClock")
    let hour, minute, second
    let session = "am"

    let time = new Date();
    hour = time.getHours()
    minute = time.getMinutes();
    second = time.getSeconds();
    
    if(hour == 0) {
        hour = "12"
    }
    if(hour > 12) {
        hour = hour -12
        session = "PM"
    }

    hour = (hour < 10)? "0" + hour :  hour
    minute = (minute <10)? "0" + minute : minute
    second = (second < 10)? "0" + second : second

    let setTime = hour + ":" + minute + ":" + second +  " " +session

   // appendHour.innerHTML = setTime
    appendHour.textContent = setTime
    setTimeout(showTime, 1000)


}

showTime()