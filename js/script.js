const sidenav = document.getElementById('sidenav')

window.onscroll = function(){
    scrollBtn()
}

function abrirMenu(){
    console.log('rodou')
    sidenav.style.right = '0px';
}


function fecharMenu(){
    sidenav.style.right='-700px';
}


function scrollBtn(){
    var btn = document.getElementById('btntopo')
    if(document.documentElement.scrollTop > 600){
        btn.style.display ='block';
    }
    else{
        btn.style.display ='none';
    }
}