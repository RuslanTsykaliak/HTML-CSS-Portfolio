document.addEventListener("DOMContentLoaded", async function () {
    const files = [
        '/header.html',
        '/about.html',
        '/portfolio.html',
        '/blogs.html',
        '/contact.html',
        '/controls.html'
    ];

    const container = document.createElement('div'); 
    document.body.appendChild(container); 

    for (const file of files) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to load ${file}: ${response.statusText}`);

            const content = await response.text();
            const section = document.createElement('div');
            section.innerHTML = content;
            container.appendChild(section);
        } catch (error) {
            console.error(error);
        }
    }

    // Ensure app.js is loaded after the HTML content
    const script = document.createElement('script');
    script.src = '/app.js';
    script.async = true;
    document.body.appendChild(script);
});
