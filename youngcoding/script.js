const tema = window.matchMedia('(prefers-color-scheme: dark)');

mudaTema();

tema.addListener(function(evento){
    mudaTema();
});

function mudaTema(){
    var elementos = document.querySelectorAll('.main-section *');
    
    if(tema.matches == true){
        document.querySelector('body').style.background = '#000'

        for (let x = 0; x < elementos.length; x++) {
            elementos[x].classList.add('dark');
        }
    } else {
        document.querySelector('body').style.background = '#fff'

        for (let x = 0; x < elementos.length; x++) {
            elementos[x].classList.remove('dark');
        }
    }
}