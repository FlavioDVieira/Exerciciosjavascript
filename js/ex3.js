function ocultar_resultado(){
    /* ------- Oculta no carregamento da página os parágrafos 
         aonde o resultado é éxibido--------- */
    document.getElementById("resultado1").style.display = "none";
    document.getElementById("resultado2").style.display = "none";
    document.getElementById("resultado3").style.display = "none";
    document.getElementById("resultado_total").style.display = "none";
}

function calcular(){
    /* ------- Exibe no clique do botão os parágrafos 
         aonde o resultado é éxibido--------- */
    document.getElementById("resultado1").style.display = "block";
    document.getElementById("resultado2").style.display = "block";
    document.getElementById("resultado3").style.display = "block";
    document.getElementById("resultado_total").style.display = "block";
    res_primeiro_nome.innerHTML = document.getElementById("primeiro_nome").value;
    
    res_segundo_nome.innerHTML = document.getElementById("segundo_nome").value;

    res_terceiro_nome.innerHTML = document.getElementById("terceiro_nome").value;

    let valor_pri_produto = parseFloat(document.getElementById("valor_pri_produto").value);
    let qtde_pri_produto = parseFloat(document.getElementById("qtde_pri_produto").value);
    let tvpp = valor_pri_produto * qtde_pri_produto;
    total_venda_pri_produto.innerHTML = tvpp;

    let valor_seg_produto = parseFloat(document.getElementById("valor_seg_produto").value);
    let qtde_seg_produto = parseFloat(document.getElementById("qtde_seg_produto").value);
    let tvsp = valor_seg_produto * qtde_seg_produto;
    total_venda_seg_produto.innerHTML = tvsp;

    let valor_ter_produto = parseFloat(document.getElementById("valor_ter_produto").value);
    let qtde_ter_produto = parseFloat(document.getElementById("qtde_ter_produto").value);
    let tvtp = valor_ter_produto * qtde_ter_produto;
    total_venda_ter_produto.innerHTML = tvtp;

    total_venda_produtos.innerHTML = tvpp + tvsp + tvtp;
}

function limpar(){
    document.getElementById("primeiro_nome").value = "";
    document.getElementById("valor_pri_produto").value = "";
    document.getElementById("qtde_pri_produto").value = "";
    total_venda_pri_produto.innerHTML = "";

    document.getElementById("segundo_nome").value = "";
    document.getElementById("valor_seg_produto").value = ""
    document.getElementById("qtde_seg_produto").value = "";
    total_venda_seg_produto.innerHTML = "";
        
    document.getElementById("terceiro_nome").value = "";
    document.getElementById("valor_ter_produto").value = ""
    document.getElementById("qtde_ter_produto").value = "";
    total_venda_ter_produto.innerHTML = "";

    total_venda_produtos.innerHTML = "";

    document.getElementById("resultado1").style.display = "none";
    document.getElementById("resultado2").style.display = "none";
    document.getElementById("resultado3").style.display = "none";
    document.getElementById("resultado_total").style.display = "none";
}