const tplnFn = (imgNum, sizeNum, speedNum, rotateNum, translateNum, flipNum, left) => {
    let div = document.createElement('div');
    div.className = `brack-bird img${imgNum} size${sizeNum} speed${speedNum} rotate${rotateNum} translateX${translateNum} flip${flipNum}`;
    div.style.left = `${left}%`;
    div.innerHTML = '<p><span></span></p>';
    return div;
}
const randomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min)) + min;   
}

let counter = 0;
setInterval(()=>{
    counter++;
    if(counter > 50){
        document.body.firstElementChild.nextElementSibling.remove();
    }
    document.body.appendChild(
        tplnFn(randomInt(5, 1), randomInt(5, 1), randomInt(5, 1), randomInt(5, 1), randomInt(2), randomInt(2), randomInt(110, -5))
    );
}, 500)
