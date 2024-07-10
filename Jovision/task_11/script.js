// script.js
async function getIP() {
    const button = document.getElementById('ipButton');
    try {
        const response = await fetch('https://api.ipify.orgx/');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        button.textContent = data.ip;
    } catch (error) {
        window.alert('Failed to fetch IP address: ' + error.message);
    }
}
