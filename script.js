function clock() {
    let date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let ampm = hour >= 12 ? 'pm' : "am";
    hour = date.getHours() % 12
    document.getElementById("hour").innerText = hour;
    document.getElementById("minute").innerText = minute;
    document.getElementById("second").innerText = second;
    document.getElementById("ampm").innerText = ampm;
}
setInterval(clock,1000) 