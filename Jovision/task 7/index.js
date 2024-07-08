function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var currentTime = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').textContent = currentTime;
}

setInterval(updateTime, 1000); // Update every second

// Initialize time display immediately
updateTime();
