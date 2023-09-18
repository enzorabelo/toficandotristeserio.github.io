botao.addEventListener('click', function(){

    var nomeCliente = nome.value;
    var quantiasorvete = quantidade.value
    var saborSorvete = sabores.value
    

    //alert("Nome: " + nomeCliente + " qnt: " + quantiasorvete + " Sabor: " + saborSorvete);


    var pedidoCliente = document.getElementById("pedido");
    var dadosPedido = 
    "Nome: " + nomeCliente +
    " qnt: " + quantiaSorvete +
    " Sabor: " + saborSorvete; 

    pedidoNome.innerHTML = nomeCliente;
    pedidoQuantia.innerHTML = quantiaSorvete;
    pedidoSabor.innerHTML = saborSorvete;


});