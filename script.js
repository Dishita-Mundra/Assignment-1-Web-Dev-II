function addEvent() {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (!title || !date) {
        alert("Please enter title and date!");
        return;
    }

    const list = document.getElementById('eventList');

    
    const li = document.createElement('li');
    li.className = 'event-item';

  
    li.innerHTML = `
        <button class="delete-btn" onclick="this.parentElement.remove()">✖</button>
        <h3>${title}</h3>
        <div>
            <span class="badge-date">📅 ${date}</span>
            <span class="badge-cat">${category}</span>
        </div>
        <p class="event-desc">${description}</p>
    `;

    list.appendChild(li);

   
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}


function addSample() {
    document.getElementById('title').value = "JavaScript Workshop";
    document.getElementById('date').value = "2026-02-20";
    document.getElementById('category').value = "Workshop";
    document.getElementById('description').value = "Hands-on JS learning session.";
    addEvent();
}
