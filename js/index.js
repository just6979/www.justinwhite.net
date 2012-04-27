// will contain global site JS stuff

$(document).ready(function(){
    $("section header").click(function(event){
        $(this).siblings('.content').toggleClass("visible invisible");
    });
});