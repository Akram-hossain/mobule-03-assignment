const changeTextColor = () => {
    let selectedPara = document.querySelectorAll('.para-common');

    for (let i = 0; i < selectedPara.length; i++) {
        selectedPara[i].style.color = 'red';
    }
}

document.getElementById('changeClr').addEventListener('click',changeTextColor);