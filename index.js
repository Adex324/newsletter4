

$(document).ready(function(){
    $("#email").keyup(function(){
        if(validateEmail()){
          $("#email").css("border" , "2px solid green");
          $("#email").css( "background-color" , " white ") 
          $(".msg").html("<h4>Email is valid</h4>" );
          $(".msg").css("color" , " green");
          $('.btn-blue').prop('disabled', false);
          
        }else{ 
         $("#email").css( "border" , "2px solid hsl(4, 55%, 60%) ");
         $("#email").css( "background-color" , " hsl(4, 55%, 90%)")
         $(".msg").html("<h4>Valid email required</h4>");
         $(".msg").css("color" , " hsl(4, 55%, 60%)");
         $('.btn-blue').prop('disabled', true);
         
        }
       
    });
   
});

function validateEmail(){
    var email= $("#email").val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
if(reg.test(email)){
    return true;

}else{
    return false;
}
}