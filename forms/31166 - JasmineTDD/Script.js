$(document).ready(function(){
    $("#a, #b").on("change", function(){
        var a = $("#a").val();
        var b = $("#b").val();
        $("#sum").text(sum(a,b));
    });
});