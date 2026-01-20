// 1. Find the button by its ID
const button = document.getElementById('mybutton');

// 2. Listen for a click
button.addEventListener('click', function() {
    
    // 3. Open a new tab
    // Change 'about:blank' to the name of your next page (e.g., 'page2.html')
    window.open('suprise.html', '_blank'); 

});