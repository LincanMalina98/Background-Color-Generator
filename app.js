const buttonContainer = document.getElementById("button");

buttonContainer.addEventListener("click",changeBgColor);

function changeBgColor() 
{
    const container = document.getElementById("container");

    let r = Math.floor(Math.random()*(255-0+1)+0);
    let g = Math.floor(Math.random()*(255-0+1)+0);
    let b = Math.floor(Math.random()*(255-0+1)+0);
    container.style.background = `rgb(${r},${g},${b})`;
}

