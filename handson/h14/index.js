//1.

$("#show").click(function(){
    $("p").show();
})

$("#hide").click(function(){
    $(".p").hide();
})

//2.
$("#button").click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/12", 
        type:"GET",
        success:function(response){
            console.log(response);
            document.querySelector("h1").innerHTML=response.title
        }

    })
})






