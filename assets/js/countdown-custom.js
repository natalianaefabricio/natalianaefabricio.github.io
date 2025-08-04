// Custom countdown script for wedding date
$(document).ready(function() {
    // Clear any existing countdown timers and plugins
    if (window.weddingCountdownTimer) {
        clearInterval(window.weddingCountdownTimer);
    }
    
    // Disable any existing countdown plugins
    $('#clock').off().removeData().empty();
    
    // Clear any other intervals that might be running
    var highestTimeoutId = setTimeout(function(){}, 1);
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    
    // Set the wedding date to September 26, 2025
    var weddingDate = new Date('2025-09-26T00:00:00').getTime();
    
    function updateCountdown() {
        // Get current date and time
        var now = new Date().getTime();
        
        // Calculate the distance between now and the wedding date
        var distance = weddingDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Ensure non-negative values
        days = Math.max(0, days);
        hours = Math.max(0, hours);
        minutes = Math.max(0, minutes);
        seconds = Math.max(0, seconds);
        
        // Display the countdown in the #clock element
        var clockElement = document.getElementById('clock');
        if (clockElement) {
            if (distance > 0) {
                clockElement.innerHTML = 
                    '<div class="box"><div><div class="time">' + days + '</div> Dias </div></div>' +
                    '<div class="box"><div><div class="time">' + (hours < 10 ? '0' + hours : hours) + '</div> Horas </div></div>' +
                    '<div class="box"><div><div class="time">' + (minutes < 10 ? '0' + minutes : minutes) + '</div> Mins </div></div>' +
                    '<div class="box"><div><div class="time">' + (seconds < 10 ? '0' + seconds : seconds) + '</div> Segs </div></div>';
            } else {
                // If the countdown is finished, display a message
                clearInterval(window.weddingCountdownTimer);
                clockElement.innerHTML = '<div class="expired">O grande dia chegou!</div>';
            }
        }
    }
    
    // Initial call
    updateCountdown();
    
    // Update the countdown every 1 second
    window.weddingCountdownTimer = setInterval(updateCountdown, 1000);
});