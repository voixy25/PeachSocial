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
                confirmButtonText: 'Aight mb nigga!'
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
                <img src="https://mir-s3-cdn-cf.behance.net/user/115/4919f3805150007.5fdcb1ede5d59.jpg"
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


const canvas = document.getElementById('peachCanvas');
const ctx = canvas.getContext('2d');

// Set up canvas background
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw peach body
function drawPeachBody() {
    ctx.beginPath();
    ctx.moveTo(545, 158.25);
    ctx.bezierCurveTo(716.25, 289.88, 627.33, 615, 313.71, 653.75);
    ctx.bezierCurveTo(124, 641, -119, 400, 77.33, 173.36);
    ctx.bezierCurveTo(77, 173, 141.33, 224.67, 255.33, 168);
    ctx.bezierCurveTo(294, 149, 319.75, 136, 328.5, 146.75);
    ctx.bezierCurveTo(360.29, 109.85, 499.33, 116.67, 545, 158.25);
    ctx.closePath();
    ctx.fillStyle = "#f95700";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function drawPeachStem() {
    ctx.beginPath();
        // Move to the starting point
        ctx.moveTo(328.38, 146.38);
        // First cubic Bezier curve
        ctx.bezierCurveTo(328.58, 146.80, 335.18, 141.73, 334.75, 140.88);
        ctx.bezierCurveTo(334.75, 140.88, 318.25, 73.75, 353.18, 30.64);
        ctx.bezierCurveTo(354.50, 17.62, 337.50, 6.25, 325.25, 7.88);
        ctx.bezierCurveTo(313.00, 9.50, 302.91, 77.82, 313.27, 133.82);
        ctx.bezierCurveTo(312.28, 134.45, 325.00, 148.18, 328.38, 146.38);
        ctx.closePath(); // Close the path
        ctx.fillStyle = "#563517";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
}

// Draw right peach leaf
function drawPeachLeafRight() {
    ctx.beginPath();
    ctx.moveTo(335.27, 141.09);
    ctx.bezierCurveTo(335.27, 141.18, 434.45, 91.15, 542.5, 156.88);
    ctx.bezierCurveTo(543.47, 157.73, 578.85, 119.91, 575.75, 115.25);
    ctx.bezierCurveTo(574.75, 110.5, 465.76, -3.82, 331.55, 97.09);
    ctx.bezierCurveTo(330.6, 95.53, 330.08, 133.8, 335.27, 141.09);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}

// Draw left peach leaf
function drawPeachLeafLeft() {
    ctx.beginPath();
    ctx.moveTo(29.38, 111.38);
    ctx.bezierCurveTo(29.38, 111.38, 75, 254.33, 257, 167.33);
    ctx.bezierCurveTo(275.33, 158, 296.88, 149.75, 321.12, 143);
    ctx.bezierCurveTo(303.62, 115, 188.52, 1.46, 29.38, 111.38);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}

// Drawing sequence
drawPeachBody(); // Draw peach body first
drawPeachStem(); // Draw stem last
drawPeachLeafLeft(); // Draw left leaf
drawPeachLeafRight(); // Draw right leaf
