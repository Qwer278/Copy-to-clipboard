// function myfunction(){
//     var text1=document.getElementById("text");
//     console.log('txt',text1);
//     text1.value.Selected();
//     text1.setSelectionRange(0,1000);

// }

$(document).ready(function(){
    $("#btn").click(function(){
        $("#text").select();
        document.execCommand("copy");
    });
});