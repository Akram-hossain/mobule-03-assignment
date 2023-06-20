const buttonClickEvnt = () => {
    let paragraph = document.getElementById('myParagraph');
    paragraph.textContent = "Button Clicked!";
}

// Add event listener to the button
let button = document.getElementById('myButton');
button.addEventListener('click', buttonClickEvnt);