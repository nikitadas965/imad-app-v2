console.log('Loaded!');
//change the text of the main div
var element=document.getElementById('main-text');
element.innerHTML='New Value';

//move image

var img= document.getElementById('madi');
var marginLeft=0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick= function () {
    var interval= setInterval(moveRight, 108);
};


    