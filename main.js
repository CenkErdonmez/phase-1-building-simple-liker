// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal");
const errorMessage = document.querySelector("#modal-message");

// Add the .hidden class to the error modal initially
errorModal.classList.add("hidden");

// Mimic server call function
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve("Success");
      } else {
        reject("Error: Server request failed");
      }
    }, 1000); // Simulating server delay with 1 second timeout
  });
}

// Function to handle the heart click event
function handleHeartClick(event) {
  const heart = event.target;
  
  // Check if the heart is empty or full
  if (heart.classList.contains("empty-heart")) {
    // Simulate server request
    mimicServerCall()
      .then(() => {
        // Change heart to full and add activated-heart class on success
        heart.classList.remove("empty-heart");
        heart.classList.add("full-heart", "activated-heart");
      })
      .catch((error) => {
        // Display error modal and show server error message
        errorMessage.textContent = error;
        errorModal.classList.remove("hidden");
        
        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  } else if (heart.classList.contains("full-heart")) {
    // Change heart back to empty and remove activated-heart class
    heart.classList.remove("full-heart", "activated-heart");
  }
}

// Attach click event listener to all hearts
const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach((heart) => {
  heart.addEventListener("click", handleHeartClick);
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
