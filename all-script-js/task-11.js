 // function to create list items
 const dynamicCreateList = () => {
    let unordrList = document.getElementById('unordrList');

    for (let i = 1; i <= 5; i++) {
        let myListItem = document.createElement('li');
        myListItem.textContent = i;
        unordrList.appendChild(myListItem);
    }
}

// call
dynamicCreateList();