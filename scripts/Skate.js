document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById('changeEventBtn').addEventListener('click', function() {
    document.getElementById('event-date').textContent = 'Next event: 12th Feb 2025';
});

document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const selectedEvent = document.getElementById('event').value;

    localStorage.setItem('name', name);
    localStorage.setItem('event', selectedEvent);

    document.getElementById('confirmationMessage').textContent = `Thank you, ${name}! You have registered for the ${selectedEvent}.`;
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;