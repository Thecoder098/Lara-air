document.getElementById('submit').addEventListener('click', () => {
    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();

    if (from && to) {
        alert(`Searching flights from ${from} to ${to}...`);
        // Implement logic to fetch flight data here
    } else {
        alert('Please fill in both fields.');
    }
});
