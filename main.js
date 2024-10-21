
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let mostafa = document.querySelector('.mostafa');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3  + 'px';
    mostafa.style.fontSize = value + 'px';
    if(scrollY >= 65.91999816894531){
        mostafa.style.fontSize = 65.91999816894531 + 'px';
        mostafa.style.position = 'fixed';
        if(scrollY >= 394.8800048828125){
            mostafa.style.display = 'none';
        }else{
            mostafa.style.display = 'block';
        }
        if(scrollY >= 174.0800018310547){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f';
        }else{
            document.querySelector('.main').style.background =   'linear-gradient(rgb(30, 1, 42), rgb(37, 20, 20))' ;
        }

    }
}
