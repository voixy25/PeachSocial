document.addEventListener("DOMContentLoaded", () => {
    
    const tweetInput = document.getElementById("tweetInput"); // Input field for tweets
    const tweetButton = document.getElementById("tweetButton"); // "Preach" button
    const feed = document.getElementById("feed"); // Container for the feed

    // Add event listener to the "Preach" button
    tweetButton.addEventListener("click", () => {
        const tweetText = tweetInput.value.trim(); // Get user input and trim whitespace

        if (tweetText === "") {
            Swal.fire({
                title: "Error!",
                text: "Please type something before you preach! 🙏",
                icon: "error", 
                confirmButtonText: 'OK'
              });
            return;
        }

        // Create and append the new tweet
        const tweetElement = createTweetElement(tweetText);
        feed.prepend(tweetElement); // Add tweet to the top of the feed

        // Clear the input field after posting
        tweetInput.value = "";
    });

    // Function to create a new tweet element
    function createTweetElement(tweetText) {
        // Create a <section> element for the new tweet
        const tweetElement = document.createElement("section");
        tweetElement.className = "post";

        // Define the inner structure for the new tweet
        tweetElement.innerHTML = `
            <div class="post-header">
                <img src="peach.png"
                    alt="User Avatar" class="avatar" />
                <div class="post-info">
                    <strong>Voixy</strong>
                    <span>@voixy25 · Just now</span>
                </div>
            </div>
            <div class="post-content">
                <p>${sanitizeInput(tweetText)}</p>
            </div>
            <div class="post-footer">
                <button>💬</button>
                <button>🔁</button>
                <button>❤️</button>
                <button>📤</button>
            </div>
        `;

        return tweetElement; // Return the constructed tweet element
    }

    // Function to sanitize user input to prevent XSS attacks
    function sanitizeInput(input) {
        const div = document.createElement("div");
        div.textContent = input; // Escape HTML in input
        return div.innerHTML; // Return escaped HTML
    }
});