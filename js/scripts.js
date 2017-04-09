//start fades slide: title and image 
$( document ).ready(function() {
setTimeout(function() {
     $('.slideshow p').fadeIn(1000);
}, 500);
    setTimeout(function() {
    $('.slideshow img').css( "opacity", "1" );
}, 1500);

});
//end fades slide

//slideshow
    var slideIndex = 1; //começa com 1 para que corresponda ao nr de elementro dentro do array x
showDivs(slideIndex); 

function plusDivs(y) {
    showDivs(slideIndex += y);
}
 
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow"); 
    if (n > x.length) { //se o parâmetro n for superior ao nr de items no array x
        slideIndex = 1 //definir a var slideindex=1 (primeiro slide)
    }
    if (n < 1) { //se o parâmetro n for inferior a 1
        slideIndex = x.length //volta para o último slide
    }
    for (i = 0; i < x.length; i++) { //loop que corre o slide
        x[i].style.opacity = 0; //enquanto as condições do loop se verificarem a opacidade é 0, deixando todos os elementos a 0
    }
    x[slideIndex - 1].style.opacity = 1; //atribui opacidade 1 ao elemento que está activo. retira-se -1 à variável para fazer match com a contagem do array
}
//end slideshow


$( document ).ready(function() {

    //informação de cada foto em mouve hover e mouse out
    $('.descriptActivate').on('mouseover', function () {
        $('.description').fadeIn('fast');
    });
    $('.descriptActivate').on('mouseout', function () {
        $('.description').fadeOut('fast');
    });
    // fim da informação foto
   
    //teclado
    $(document).keyup(function(e) {
       if (e.keyCode == 37) {
           plusDivs(-1);
       }
        if (e.keyCode == 39) {
           plusDivs(+1);
       }
   });
    
});