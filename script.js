$(function(){
    var i = 0;
    $('#2').on('click', function(){
        i++;
        $('#number').val(i);});
     $('#1').on('click', function(){
         i--;
        $('#number').val(i);
});
});