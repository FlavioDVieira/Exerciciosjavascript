function ocultar_resultado(){
    /* ------- Oculta no carregamento da página o parágrafo 
         aonde o resultado é éxibido--------- */
    document.getElementById("resultado").style.display = "none";
}

function calcular(){
    /* ------- Exibe no clique do botão o parágrafo 
         aonde o resultado é éxibido--------- */
    document.getElementById("resultado").style.display = "block";
    
    let comprimento_total = parseFloat(document.getElementById("qtde_total_compri").value);
    let largura_total = parseFloat(document.getElementById("qtde_total_larg").value);
    let metragem_total_comodo = comprimento_total * largura_total;
    let valor_total = metragem_total_comodo * 36;
    custo_total.innerHTML = valor_total;
}

function limpar(){
    document.getElementById("qtde_total_compri").value = "";
    document.getElementById("qtde_total_larg").value = "";
    document.getElementById("custo_total").value = "";
    document.getElementById("resultado").style.display = "none";
}