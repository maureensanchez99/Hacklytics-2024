function updateUsername() {
    let username = document.getElementById("username-input").value;
    document.getElementById("username-display").innerText = username;
    //window.location.href = '/frontend/emotion_wrap.html';
    window.location.href = "/frontend/emotion_wrap.html";
} 
function saveUsername() {
  var username = document.getElementById("username").value;
  localStorage.setItem("username", username);
}
function getUsername() {
  let username = localStorage.getItem("username");
  return username;
}

const userNameInput = document.getElementById('user-name');
const submitNameBtn = document.getElementById('submit-name');
const messageOverlay = document.getElementById('message-overlay');

submitNameBtn.addEventListener('click', () => {
  const userName = userNameInput.value.trim();
  if (!userName) {
    // Handle empty name case (e.g., alert or error message)
    return;
  }

  // Create welcome message content with user name
  //figure out how to summon values from csv files
  const message = `Hello, ${userName}! You spent __ hours on social media. You posted __ times and have __ interactions`;

  // Insert content into the overlay div
  messageOverlay.innerHTML = `<p>${message}</p>`;

  // Show the overlay
  messageOverlay.style.display = 'block';
});