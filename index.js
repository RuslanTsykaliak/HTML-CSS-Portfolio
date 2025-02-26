const files = ['header.html', 'about.html', 'portfolio.html', 'blogs.html', 'contact.html', 'controls.html'];

async function loadFiles() {
    const container = document.createElement('div'); // Create a container for the loaded content
    document.body.appendChild(container); // Append to the body

    for (const file of files) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            const content = await response.text();
            const section = document.createElement('div'); // Create a div for each file's content
            section.innerHTML = content;
            container.appendChild(section); // Append the loaded content to the container
        } catch (error) {
            console.error(error);
        }
    }

    const script = document.createElement('script');
    script.src = 'app.js';
    document.body.appendChild(script);
}

// Load the files once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadFiles);



// // PHP
// <?php
// // An array containing the filenames of the HTML files to include.
// $files = ['header.html', 'about.html', 'portfolio.html', 'blogs.html', 'contact.html', 'controls.html'];

// // Loop through each filename in the $files array.
// foreach ($files as $file) {
//     // Include the content of the current HTML file at this point in the PHP code.
//     // This effectively combines the content of multiple HTML files into one.
//     include $file;
// }
// ?>

// <script src="app.js"></script>
