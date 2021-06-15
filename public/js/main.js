var App = (function(){

    var selecionarItemMenu = function(){
        const divConteusoSelecuonado = "<div>●</div>";
        const navMenu = $('.nav-menu');
        navMenu.find(`a[href="${location.pathname}"] .item-nav-menu`)
            .addClass('action')
            .append(divConteusoSelecuonado);
    }
    var setarPlayer = function(){
        $('#play-audio').prop('src', '/audio/faixa-1.mp3')
    }
    var eventoPlay = function(){
        $('.play-pause').attr('data-status', 'pause')

        $('.play-pause').on('click', function(){
            if($('.play-pause').attr('data-status') === 'play'){
                $('.play-pause').attr('data-status', 'pause')
                $('.play-pause').find('i').removeClass('fa-pause');
                $('.play-pause').find('i').addClass('fa-play');
                document.getElementById('play-audio').pause();
            }
            else{
                $('.play-pause').attr('data-status', 'play')
                $('.play-pause').find('i').removeClass('fa-play');
                $('.play-pause').find('i').addClass('fa-pause');
                document.getElementById('play-audio').play();
            }
                
            console.log($('.play-pause').attr('data-status'));
        });
    }
    return {
        init: function(){
            setarPlayer();
            eventoPlay();
            selecionarItemMenu();
        }
    }
})()

$(document).ready(function(){
    App.init();
})