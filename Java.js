const Change = document.getElementById('Change')

function cambio(){
    Change.src = './img/galeria2.jpg'
}
function cambio2(){
    Change.src = './img/galeria3.jpg'
}
function cambio3(){
    Change.src = './img/galeria1.jpg'
}

$(document).ready(function() {
    $('#comicCarousel').on('slid.bs.carousel', function () {
        // Obtiene el índice de la diapositiva activa
        var slideIndex = $('#comicCarousel .carousel-item.active').index() + 1;

        // Cambia el texto según la diapositiva activa
        if (slideIndex === 1) {
            $('#comicDescription').text('Lio es alguien que tubo un pasado complicado y no le fue muy bien pero aun asi le gusta ayudar a los demas cuando lo necesitan');
        } else if (slideIndex === 2) {
            $('#comicDescription').text('Alejo es un joven tranquilo sin procupaciones pero con un pasado no tan bueno');
        }else if (slideIndex === 3){
            $('#comicDescription').text('andres es un chico que de verdad le afecto y la deprecion era muy grave pero Lio y alejo lo ayudaron hasta el final');
        }
        
        // Añade más 'else if' si hay más diapositivas con texto diferente
    });
});