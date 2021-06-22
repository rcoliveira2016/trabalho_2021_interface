var App = (function(){

    var selecionarItemMenu = function(){
        const divConteusoSelecuonado = "<div>●</div>";
        const navMenu = $('.nav-menu');
        navMenu.find(`a[href="${location.pathname}"] .item-nav-menu`)
            .addClass('action')
            .append(divConteusoSelecuonado);
    }
    var selecionarItemAsideMenu = function(){
        const navMenu = $('.aside-menu');
        navMenu.find(`a[href="${location.pathname}"] li`)
            .addClass('active')
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
    var eventoControlesAcoes = function(){
        $('.div-acao .zap').on('click', function(){
            const urlBaseApi = new URL("https://api.whatsapp.com/send");
            urlBaseApi.searchParams.append("phone", "555492267997");
            const a = document.createElement("a");
            a.href = urlBaseApi.toString();
            a.target = "_blank";
            a.click();
        });
        $('.div-acao .expandir').on('click', function(){
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              }
            }
        });
    }
    var eventoMenuLateral = function(){
        window.addEventListener('resize', function(event) {
            if($(window).width() > 450)
                $('aside').css({
                    display:"flex",
                    position:"relative",
                    height:"auto",
                    "z-index": 0
                })
            else{
                $('aside').css({
                    display:"none",
                    position:"relative",
                    height:"auto",
                    "z-index": 0,
                })
            }
        }, true);
        $('.abrir-menu-lateral').on('click', function(){
            if($(window).width() > 450) return;
            $('aside').css({
                display:"flex",
                position:"fixed",
                height:"100vh",
                "z-index": 10
            })
        });
        $('.aside-titulo').on('click', function(){
            if($(window).width() > 450) return;
            $('aside').css({
                display:"none",
                position:"relative",
                height:"auto",
                "z-index": 0,
                transform: "translatex(-150%)"
            })
        });
    }
    return {
        init: function(){
            selecionarItemAsideMenu();
            eventoControlesAcoes();
            setarPlayer();
            eventoPlay();
            selecionarItemMenu();
            eventoMenuLateral();
        }
    }
})()

$(document).ready(function(){
    App.init();
})