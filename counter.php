<?php
// File to store the count
$counterFile = 'counter.txt';

// Check if the file exists
if (!file_exists($counterFile)) {
    // Create the file and set the initial count to 0
    file_put_contents($counterFile, '0');
}

// Read the current count
$count = (int)file_get_contents($counterFile);

// Increment the count
$count++;

// Write the new count back to the file
file_put_contents($counterFile, $count);

// Display the count
echo "Visitor count: " . $count;
?>