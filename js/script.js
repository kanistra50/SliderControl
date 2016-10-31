$(document).ready(function(){
  
    var $container = $('.container');
    var $main = $('.main');
    var $btn = $('.button');
    var $range = $('input.range');
    var $back = $('.back');
    var $img = $('.img');
  
    $container
        .mouseover(function() {
            $main.removeClass("hide");
            $back.addClass("shadow");
        })
        .mouseout(function() {
            $main.addClass("hide");
            $back.removeClass("shadow");
        });
 
    $img.click(function() {
            $img.removeClass("plus")
            .addClass("tick");
        });

    $range.on('input', onChangeRange);
  
    
});

function onChangeRange(e) {
  var text = $(this).attr('data');
  var value = e.target.value;
  var $text = $('.input_data[data="'+text+'"]');
  $text.html('+'+value);
};

function toogler() {
    console.log("Yes");
    if ( $( this ).is( ".plus" ) ) {
    return "tick";
  } else {
    return "plus";
  }
};
