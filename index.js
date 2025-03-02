document.getElementById('new-joke-btn').addEventListener('click', fetchJoke);

function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

// Fetch a joke when the page loads
fetchJoke();
