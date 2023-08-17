<?php
// An array containing the filenames of the HTML files to include.
$files = ['header.html', 'about.html', 'portfolio.html', 'blogs.html', 'contact.html', 'controls.html'];

// Loop through each filename in the $files array.
foreach ($files as $file) {
    // Include the content of the current HTML file at this point in the PHP code.
    // This effectively combines the content of multiple HTML files into one.
    include $file;
}
?>

<script src="app.js"></script>