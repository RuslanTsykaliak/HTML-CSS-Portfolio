(function () {
    // This is an immediately-invoked function expression (IIFE) that encapsulates the code within its own scope.
    
    // Select all elements with the class "control" and iterate over them.
    [...document.querySelectorAll(".control")].forEach(button => {
        // Add a click event listener to each "control" button.
        button.addEventListener("click", function() {
            // Remove the "active-btn" class from the currently active button.
            document.querySelector(".active-btn").classList.remove("active-btn");
            
            // Add the "active-btn" class to the clicked button, marking it as active.
            this.classList.add("active-btn");
            
            // Remove the "active" class from the currently active content section.
            document.querySelector(".active").classList.remove("active");
            
            // Add the "active" class to the content section associated with the clicked button.
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
    // Add a click event listener to the element with the class "theme-btn".
    document.querySelector(".theme-btn").addEventListener("click", () => {
        // Toggle the "light-mode" class on the <body> element, changing the theme.
        document.body.classList.toggle("light-mode");
    })
})();
