        // Fetch the visitor count from the PHP file
        fetch('counter.php')
            .then(response => response.text())
            .then(data => {
                // Extract the visitor count from the response
                const count = data.match(/Visitor count: (\d+)/)[1];
                // Display the count in the HTML
                document.getElementById('visitor-count').textContent = count;
            });