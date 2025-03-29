// Function to update the clock  
function updateClock() {  
    const now = new Date(); // Get current date and time  

    // Extract hours, minutes, and seconds  
    let hours = now.getHours();  
    let minutes = now.getMinutes();  
    let seconds = now.getSeconds();  

    // Format time to ensure two digits  
    hours = String(hours).padStart(2, '0');  
    minutes = String(minutes).padStart(2, '0');  
    seconds = String(seconds).padStart(2, '0');  

    // Update the HTML elements with new time  
    document.querySelector('.hour').textContent = hours;  
    document.querySelector('.minute').textContent = minutes;  
    document.querySelector('.second').textContent = seconds;  
}  

// Call the function once to set the initial time  
updateClock();  

// Update the clock every second  
setInterval(updateClock, 1000);  