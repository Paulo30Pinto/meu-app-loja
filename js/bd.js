/**DADOS DOS PRODUTOS**/

const produtos = [
    {
         id: 1,
         nome: 'Arroz patriota 1kg',
         descricao: 'Alimento',
         preco: 1000,
         estoque: 7,
         vendas : 0,
         pratileira: 2,
         img_prod: 'img/loja_1/arroz.jpg'
    },
    {
         id: 2,
         nome: 'Compal  1L',
         descricao: 'Bebida',
         preco: 1500,
         estoque: 17,
         vendas : 0,
         pratileira: 3,
         img_prod: 'img/loja_1/compal.jpeg'
    },
    {
         id: 3,
         nome: 'Agua pura  500ml',
         descricao: 'Bebida',
         preco: 150,
         estoque: 12,
         vendas : 0,
         pratileira: 1,
         img_prod: 'img/loja_1/agua.jpg'
    },
    {
         id: 4,
         nome: 'Óleo alimo  1L',
         descricao: 'Alimentar',
         preco: 500,
         estoque: 10,
         vendas : 0,
         pratileira: 2,
         img_prod: 'img/loja_1/oleo.jpg'
    },
]

$(document).ready(function(){


    /**LISTAR TODOS PRODUTOS**/
    produtos.forEach(produto => {

        /**PRODUTOS EM STOQUE**/
        var dadosStoque = `<div class='col position-relative shadow-sm rounded' style=''>
        <img src='`+produto.img_prod+`'  alt='' width='100%' height='150px'>
        <a href='#' id='abrInfo`+produto.id+`' class='abrInfo'><i class='bi bi-chevron-double-up'></i></a>
        <div class='info card text-start'>
          <a href='#' id='fechaInfo`+produto.id+`' class='fechaInfo text-center' ><i class='bi bi-chevron-double-down'></i></a>
          <div class='div_mais'>
            <h6 class='text-center py-0'>`+produto.nome+`</h6>
            <h6 class='text-center py-0' style='margin-top: -6px;'>`+produto.descricao+`</h6>
            <p class='d-flex justify-content-between text-dark'><span><b>Stock</b></span><span class='text-danger'>`+produto.estoque+` Uni</span></p>
            <p class='d-flex justify-content-between text-dark'><span><b>Venda</b></span><span class='text-danger'>`+produto.vendas+` Uni</span></p>
            <p class='d-flex justify-content-between text-dark'><span><b>Local</b></span><span class='text-danger'>`+produto.pratileira+`</span></p>
          </div>
        </div>
      </div>`;


      /**PRODUTOS EM DESTAQUES**/
      var dadosPratileira = `
      <tr>
      <td>

          <div class="bd-highlight d-flex align-items-center position-relative">
              <img src="`+produto.img_prod+`" alt="" class="bd-placeholder-img flex-shrink-0 me-2 rounded img_produtos"   role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false">
            <div class="d-flex flex-column " style="width: 100%;">
                <p class="col-12" style="margin-bottom: -1px;">
                  <strong class="d-block text-dark">`+produto.nome+`</strong>
                </p>
                <div class="d-flex align-items-center" style="margin-bottom: -15px;">
                    <p class="w-100" ><label for="" class="text-dark">`+produto.estoque+` Stock<br>`+produto.preco+`,00 Kz</label></p>
                      <div class="p-2 flex-shrink-1 bd-highlight"  >
                        <div class="btn-group" >
                            <a href='#`+produto.id+`' class="btn btn-outline-secondary  bb" data-bs-toggle="modal" data-bs-target="#exampleModalDefault"><i class="bi bi-bag-check-fill"></i></a>
                            <input type="checkbox" class="btn-check btn-sm newClick" id="`+produto.id+`" autocomplete="off">
                            <label class="btn btn-outline-secondary  bb newClick2" for="`+produto.id+`"><i class="bi bi-cart-check-fill"></i></label>
                        </div>
                    </div>
                </div>
              </div>
          </div>

      </td>
    </tr>
      `;

       /**ADICIONAR OS PRODUTOS EM STOQUE**/
         $("#Stoquedados").append(dadosStoque)

         /**ADICIONAR OS PRODUTOS EM DESTAQUES**/
         $("#dadosPratileira").append(dadosPratileira)

         // console.log(dados)

   });


   let incremento  = 1;

   /**CLICK NO BOTÃO CARRINHO**/
   Array.from($('.newClick')).forEach((e)=>{
        e.addEventListener('click', (el)=>{
          el.preventDefault();

          var produto = produtos.find(function(produto) {
             return produto.id == e.id;
        });

    /**CONTADOR DOS PRODUTOS NO CARRINHO**/
       $("#contaCarinho").text(incremento++);



       /**LISTA DOS PRODUTOS SELECIONADOS**/
       let carrinhocompras = `
       <tr>
       <td>
         <div class=" d-flex text-muted pt-1 destaques small lh-sm border-bottom linha_produtos">
           <img src="`+produto.img_prod+`" alt="" class="bd-placeholder-img flex-shrink-0 me-2 rounded img_produtos" style="width: 65px; height: 65px;"  role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false">
           <div class="pb-3 mb-0 row w-100" style="margin-bottom: -1px;">
             <p class="col-12">
               <strong class="d-block text-dark">`+produto.nome+`</strong>
             </p>
             <div class="d-flex align-items-center justify-content-around col-12 btnApagar" style="margin-bottom: -15px;">
               <label for="" class="text-dark">`+produto.estoque+` Stock<br>`+produto.preco+`,00 Kz</label>

               <input type="number" class="" id="validationDefault03" value="1" style="max-width: 55px;">
               <a href="#`+produto.id+`" class="eliminar"  style="font-size: 21px;  z-index: 999 !important;" id='`+produto.id+`'>
                 <i class="text-danger bi bi-trash-fill"></i>
               </a>
               <form action="" class='d-none' hidden>
               <button type="submit" class="" hidden>
               <i class="text-danger bi bi-trash-fill"></i>
               </button>
               <input type="button" value="A" hidden>
               <input type="submit" value="E" hidden>
               <button type="button">
               <i class="text-danger bi bi-trash-fill"></i>
               </button>
             </form>
             </div>
           </div>

         </div>
       </td>
       </tr>
       `;

       /**APRESENTAR OS PRODUTOS SELECIONADOS NO CARRINHO**/
       $("#carrinhocompras").prepend(carrinhocompras);
     //  incremento++;

      })
    })




      function Apagar(){
        alert("Ola");
     }

    let res_pesq = $('.res_pesq');

     produtos.forEach(element => {
        const { id, nome, img_prod, preco, estoque } = element;
        let cardi = document.createElement('div');
        cardi.classList.add('item-pesq');

        cardi.id = '#'+id;
        cardi.innerHTML = `
        <img src="${img_prod}" alt="">
      <div class="w-100 px-1">
        <h4><a href="#" class="content">${nome}</a></h4>
        <div class="d-flex align-items-center justify-content-between" style="">
          <p class="text-dark">${preco} -
            <b class"" style="color: dimgrey;"> Kz</b>
            <br>
            <span class="badge bg-light text-dark">Stoque ${estoque}</span>
          </p>

          <span class="badge rounded-pill bg-rosa licar"><i class="bi bi-check-circle me-1"></i> Comprar</span>
        </div>
      </div>
        `;

        if(Number(window.innerWidth)<=767){
  res_pesq[0].appendChild(cardi);
} else{
  res_pesq[1].appendChild(cardi);
}

    //    console.log($(".res_pesq").append(cardi))
       // alert($(".btnApagar"+id).append(cardi))

      });

      $(".input_pesq_prod").keyup(function(){

 let input = $(this).val().toUpperCase();
 let items = $('.res_pesq .item-pesq');

 for(let i = 0; i < items.length; i++){
   let as = items[i].getElementsByClassName('content')[0];
   let text_valor = as.textContent || as.innerText;

   if(text_valor.toUpperCase().indexOf(input) > -1 && input != ""){
     items[i].style.display = "flex";


   }
   else{
     items[i].style.display = "none";

     //alert("Não resultou")
   }


/*   if(input == 0){
     $('.res_pesq').css('display', 'none');
   } else{
     $('.res_pesq').css('display', 'flex');
   } */
   // console.log(text_valor)
 }


// alert(items)
});


$(".licar").click(()=>{
    alert("Oi")
})

function tim(){
  var dt = new Date();
  var dia=dt.getDate();
var diaSem=dt.getDay()
var mes=dt.getMonth();
var ano=dt.getFullYear();

var horas=dt.getHours();
var minutos=dt.getMinutes();
var segundos=dt.getSeconds();

if(horas <10){
horas="0"+horas;
}

if(segundos <10){
segundos="0"+segundos;
}

if(minutos <10){
minutos="0"+minutos;
}

var meses=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Jonho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
var semanas=new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado");

//mostra.innerHTML=horas+":"+minutos+":"+segundos+"<br>";
$("#mostra1").text(semanas[diaSem]+" - "+dia+" de "+meses[mes]+" de "+ano)
}

setInterval(tim,1000);

//$("#mostra1").text("OLa")


})
