async function getIP() {
    try {
        let response = await fetch('https://api.ipify.org?format=json');
        let data = await response.json();
        document.getElementById('getIPButton').innerText = data.ip;
    } catch (error) {
        console.error('Error fetching the IP address:', error);
    }
}
