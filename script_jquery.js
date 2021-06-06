$(function(){
    $('#first').click(function(){
        $('h1').hide();
        $('h2').css("color","red");
    });

    $('#blue').click(function(){
        $('p').css("color","blue");
        $('h3').fadeOut();
    });
    $('#red').click(function(){
            $('p').css("color", "red");
            $('#mensagem').text("Cor alterada com sucesso.")
                .css({color: 'black', border:'1px solid grey'})
                .delay(1000)
                .fadeOut()
                .addClass('green');
            $('h3').delay(3000).fadeIn();
    });
    $('#grey').click(function(){
            $('p').css("background-color", "#DCDCDC");
    });

    //carrosel
    $('#l1').click(function(){
        $('#i01').show();
        $('#i02').hide();
        $('#i03').hide();
        $('#i04').hide();
    });

     $('#l2').click(function(){
        $('#i01').hide();
        $('#i02').show();
        $('#i03').hide();
        $('#i04').hide();
        });

       $('#l3').click(function(){
        $('#i01').hide();
        $('#i02').hide();
        $('#i03').show();
        $('#i04').hide();
         });

       $('#l4').click(function(){
        $('#i01').hide();
        $('#i02').hide();
        $('#i03').hide();
        $('#i04').show();
         });
});

