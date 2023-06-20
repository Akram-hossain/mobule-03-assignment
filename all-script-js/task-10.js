let paragraph = document.getElementById('myParagraph');
        const buttonClickEvnt = () => {
            paragraph.classList.add('highlight');
        }

        // Add event listener to the button
        let button = document.getElementById('myButton');
        button.addEventListener('click', buttonClickEvnt);