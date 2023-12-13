var button = document.getElementById('toggle'); 
var white = document.getElementById('toggle-box');
var triangle = document.getElementById('triangle');

button.addEventListener("click", RespondClick);

function RespondClick(){
    // Check if the window width is less than or equal to 375px
    if (window.innerWidth <= 375) {
        if (white.style.display === 'none') {
            white.style.display = 'flex';
            triangle.style.display = 'flex';
        } else {
            white.style.display = 'none';
            triangle.style.display = 'none';
        }
    }
}
