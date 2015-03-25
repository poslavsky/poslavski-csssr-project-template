$(function () {

var a = 31.7;
var sliderValue = [0.3, 2.5, 5, 7.5, 10, 12.8 , 17, 21, 25, 29, a, 35, 40, 45, 50, 55, 60, 64];

$(function () {
        $('#slider').slider({
            value:a,
            min: 0,
            max: 65,
            step: 0.1,
            slide: function (event, ui) {
               if (sliderValue.indexOf(ui.value) === -1) {                   return false;
                }
               $('#amount').val(ui.value);
            }
        });
        $('#amount').val($('#slider').slider('value'));
    });

});
