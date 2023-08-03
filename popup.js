// Function to handle toggle button change
var buttontog = false;
function handleToggle() {
    const toggleButton = document.getElementById('toggleButton');
    const statusDiv = document.getElementById('status');
    
    if (toggleButton.checked) {
      // Code to run when the button is toggled on
      statusDiv.textContent = 'Button is ON';
    } else {
      // Code to run when the button is toggled off
      statusDiv.textContent = 'Button is OFF';
    }
  }
  
  // Event listener for the toggle button
  document.getElementById('toggleButton').addEventListener('change', handleToggle);