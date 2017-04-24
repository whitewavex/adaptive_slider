    $(document).ready(function(){
        
        slider();
        
        $(window).resize(function(){
            var sliderWidth = $('#slider-container').width();
            $('.slides>li').width( sliderWidth );
            $('.slides').width( sliderWidth * $('.slides>li').length );
            $('.slides').css( 'left', -sliderWidth );
            $('.slides>li>img').css({
                'width': '84%'
            });
        });
        
        function slider(){
        
            var sliderTimer = 5000;
            var sliderWidth = $('#slider-container').width();
            $('.slides>li').width( sliderWidth );
            $('.slides').width( sliderWidth * $('.slides>li').length );
            $('.slides').css( 'left', -sliderWidth );
            $('.slides>li:last-child').prependTo('.slides');

            var intervalSlider = setInterval(next, sliderTimer);

            $('#slider-container').mouseenter(function(){
                clearInterval(intervalSlider);
            });

            $('#slider-container').mouseleave(function(){
                intervalSlider = setInterval(next, sliderTimer);
            });

            function next(){
                $('.slides').fadeOut();
                $('.slides').animate({
                    'margin-left': -sliderWidth
                }, 0, function(){
                    $('.slides>li:first-child').appendTo( '.slides' );
                    $('.slides').css( 'margin-left', '8%' );
                    $('.slides').fadeIn();
                }); 
            }

            function prev(){
                $('.slides').fadeOut();
                $('.slides').animate({
                    'margin-left': sliderWidth
                }, 0, function(){
                    $('.slides>li:last-child').prependTo( '.slides' );
                    $('.slides').css( 'margin-left', '8%' );
                    $('.slides').fadeIn();
                });
            }

            $('#nextSlide').click( next );
            $('#prevSlide').click( prev );
            
        }
        
    });