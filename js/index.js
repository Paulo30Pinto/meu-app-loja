$(document).ready(function(){
  
    //MANIPULAR CORES 
    var cor_tema = "#ad0363";
    var cor_ico = "#d30077";
    $(".cor_tema").css("background-color",cor_tema);
    $(".cor_ico").css("background-color",cor_ico);

    
   // BOTAO LOGIN
   $("#bt_login").click(function(){
       $("#div_login").addClass("d-none");
       $("#div_loja").removeClass("d-none");
   })
  
   //BOTAO SELECIONAR

   $(".info").hide();
   $(".abrInfo").click(()=>{
    $(".info").show();
   })
   $(".fechaInfo").click(()=>{
    $(".info").hide();
   })

   $("#div_produtos button").click(()=>{
        //$('.alert').removeClass("d-none");
        $('.toast').addClass("show");
   })
   $(".fechaAlerta").click(()=>{
        $('.alert').addClass("d-none");
   })
   $(".fechaToast").click(()=>{
        $('.toast').removeClass("show");
   })

   
  
})

