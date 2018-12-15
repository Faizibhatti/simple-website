

// vowel //

$('#vowel').click(function () {


    $('.vowel').css('display', 'block');
    $('.consonant').css('display', 'none');
    $('.diagram').css('display','none');
    $('.acoustics').css('display','none');
    $('.sound').css('display','none');

    $(this).addClass('active');
    $('#consonant').removeClass('active');
    $('#diagram').removeClass('active');
    $('#acoustics').removeClass('active');
    $('#sound').removeClass('active');


    console.log( $(".letter-key4").click(function(){
var data_Key = $(this).data("key");
// var letter = $(this).text();
var sound = new Audio();
sound.src = "Sounds/"+data_Key+".mp3";
sound.play();
alert(data_Key);
}));

console.log($('.img-make-resp4').maphilight());
console.log($('map').imageMapResize());


});
   
//  consonants //

$('#consonant').click(function () {


    $('.vowel').css('display', 'none');
    $('.consonant').css('display', 'block');
    $('.diagram').css('display','none');
    $('.acoustics').css('display','none');
    $('.sound').css('display','none');




      $(this).addClass('active');
    $('#vowel').removeClass('active');
    $('#diagram').removeClass('active');
    $('#sound').removeClass('active');
    $('#acoustics').removeClass('active');
  

    console.log($(".letter-key").click(function () {
        var data_Key = $(this).data("key");
        var sound = new Audio();
        sound.src = "Sounds/" + data_Key + ".mp3";
        sound.play();
    }));

    console.log($('.img-make-resp').maphilight());
    console.log($('map').imageMapResize());


    console.log($(".letter-key1").click(function () {
        var data_Key = $(this).data("key");
        var sound = new Audio();
        sound.src = "Sounds/" + data_Key + ".mp3";
        sound.play();
    }));

    console.log($('.img-make-resp1').maphilight());
    console.log($('map').imageMapResize());

});

    // diagram //

    $('#diagram').click(function () {


         $('.vowel').css('display', 'none');
         $('.consonant').css('display', 'none');
         $('.diagram').css('display','block');
         $('.sound').css('display','none');
         $('.acoustics').css('display','none');


         $(this).addClass('active');
         $('#vowel').removeClass('active');
         $('#consonant').removeClass('active');
         $('#sound').removeClass('active');
         $('#acoustics').removeClass('active');



});

        // sound //

         $('#sound').click(function () {


         $('.sound').css('display', 'block');
         $('.vowel').css('display', 'none');
         $('.consonant').css('display', 'none');
         $('.diagram').css('display','none');
         $('.acoustics').css('display','none');
         $(this).addClass('active');
         $('#consonant').removeClass('active');
         $('#diagram').removeClass('active');
         $('#vowel').removeClass('active');
         $('#acoustics').removeClass('active');

         console.log($(".letter-key2").click(function(){

        var data_Key = $(this).data("key");
        var sound = new Audio();
        sound.src = "Sounds/"+data_Key+".mp3";
        sound.play();
}));

         console.log($('.img-make-resp2').maphilight());
         console.log($('map').imageMapResize());


});

        //   acoustics ////

         $('#acoustics').click(function () {


         $('.vowel').css('display', 'none');
         $('.consonant').css('display', 'none');
         $('.diagram').css('display','none');
         $('.sound').css('display','none');
         $('.acoustics').css('display','block');
         $(this).addClass('active');
         $('#consonant').removeClass('active');
         $('#diagram').removeClass('active');
         $('#vowel').removeClass('active');
         $('#sound').removeClass('active');


        });






$(document).ready(function(){

if (performance.navigation.type == 1) {
localStorage.setItem("value",0);
}


if(localStorage.getItem("value")==1)
{
$('.vowel').css('display', 'block');
    $('.consonant').css('display', 'none');
    $('.diagram').css('display','none');
    $('.acoustics').css('display','none');
    $('.sound').css('display','none');

    $(this).addClass('active');
    $('#consonant').removeClass('active');
    $('#diagram').removeClass('active');
    $('#acoustics').removeClass('active');
    $('#sound').removeClass('active');
    localStorage.setItem("value",0);
}
else if(localStorage.getItem("value")==2){

$('.vowel').css('display', 'none');
    $('.consonant').css('display', 'block');
    $('.diagram').css('display','none');
    $('.acoustics').css('display','none');
    $('.sound').css('display','none');




      $('#consonant').addClass('active');
    $('#vowel').removeClass('active');
    $('#diagram').removeClass('active');
    $('#sound').removeClass('active');
    $('#acoustics').removeClass('active');
  

    console.log($(".letter-key").click(function () {
        var data_Key = $(this).data("key");
        var sound = new Audio();
        sound.src = "Sounds/" + data_Key + ".mp3";
        sound.play();
    }));

    console.log($('.img-make-resp').maphilight());
    console.log($('map').imageMapResize());


    console.log($(".letter-key1").click(function () {
        var data_Key = $(this).data("key");
        var sound = new Audio();
        sound.src = "Sounds/" + data_Key + ".mp3";
        sound.play();
    }));

    console.log($('.img-make-resp1').maphilight());
    console.log($('map').imageMapResize());
    localStorage.setItem("value",0);
}

else if(localStorage.getItem("value")==3){

$('.vowel').css('display', 'none');
         $('.consonant').css('display', 'none');
         $('.diagram').css('display','block');
         $('.sound').css('display','none');
         $('.acoustics').css('display','none');


         $('#diagram').addClass('active');
         $('#vowel').removeClass('active');
         $('#consonant').removeClass('active');
         $('#sound').removeClass('active');
         $('#acoustics').removeClass('active');

localStorage.setItem("value",0);



}


else if(localStorage.getItem("value")==4){
$('.sound').css('display', 'block');
         $('.vowel').css('display', 'none');
         $('.consonant').css('display', 'none');
         $('.diagram').css('display','none');
         $('.acoustics').css('display','none');
         $('#sound').addClass('active');
         $('#consonant').removeClass('active');
         $('#diagram').removeClass('active');
         $('#vowel').removeClass('active');
         $('#acoustics').removeClass('active');

         console.log($(".letter-key2").click(function(){

        var data_Key = $(this).data("key");
        var sound = new Audio();
        sound.src = "Sounds/"+data_Key+".mp3";
        sound.play();
}));

         console.log($('.img-make-resp2').maphilight());
         console.log($('map').imageMapResize());



localStorage.setItem("value",0);
}


else if(localStorage.getItem("value")==5){


         $('.vowel').css('display', 'none');
         $('.consonant').css('display', 'none');
         $('.diagram').css('display','none');
         $('.sound').css('display','none');
         $('.acoustics').css('display','block');
         $('#acoustics').addClass('active');
         $('#consonant').removeClass('active');
         $('#diagram').removeClass('active');
         $('#vowel').removeClass('active');
         $('#sound').removeClass('active');


localStorage.setItem("value",0);
}


});






