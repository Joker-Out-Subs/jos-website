document.addEventListener("DOMContentLoaded", () => {
    fetch('./components/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            // var parser = new DOMParser();
            // var doc = parser.parseFromString(html, "text/html");
        })
        .catch(error => console.error('Error loading navbar:', error));
});
