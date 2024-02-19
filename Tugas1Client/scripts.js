async function add() {
    const numbers = document.getElementById('addInput').value.split(',').map(Number);
    const response = await fetch('http://localhost:5028/tugas/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numbers)
    });
    const result = await response.json();
    document.getElementById('addResult').innerText = result;
}

async function subtract() {
    const numbers = document.getElementById('subtractInput').value.split(',').map(Number);
    const response = await fetch('http://localhost:5028/tugas/subtract', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numbers)
    });
    const result = await response.json();
    document.getElementById('subtractResult').innerText = result;
}

async function lowercase() {
    const input = document.getElementById('lowercaseInput').value;
    const response = await fetch('http://localhost:5028/tugas/lowercase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    });
    const result = await response.json();
    document.getElementById('lowercaseResult').innerText = result;
}

async function checkServerStatus() {
    const serverStatus = document.getElementById("serverStatus");

    try {
        const response = await fetch('http://localhost:5028/tugas/status');
        
        if (response.ok) {
            serverStatus.innerText = "Server is connected.";
            serverStatus.classList.add("connected");
            serverStatus.classList.remove("disconnected");
        } else {
            serverStatus.innerText = "Failed to get server status.";
            serverStatus.classList.add("disconnected");
            serverStatus.classList.remove("connected");
        }
    } catch (error) {
        serverStatus.innerText = "Failed to connect to server.";
        serverStatus.classList.add("disconnected");
        serverStatus.classList.remove("connected");
    }
}

window.onload = function() {
    checkServerStatus();
};

function openTab(evt, tabName) {
    const tabcontents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";

    evt.currentTarget.classList.add("active");
}

