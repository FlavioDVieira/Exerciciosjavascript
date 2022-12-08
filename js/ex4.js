function ocultar_resultado(){
    /* ------- Oculta no carregamento da página o parágrafo 
         aonde o resultado é éxibido--------- */
    document.getElementById("resultado").style.display = "none";
}

function calcular(){
    /* ------- Exibe no clique do botão o parágrafo 
         aonde o resultado é éxibido--------- */
    document.getElementById("resultado").style.display = "block";
    
    let quilometragem = parseFloat(document.getElementById("quilometragem").value);
    let valor_litro_combustivel = parseFloat(document.getElementById("valor_litro_combustivel").value);
    let valor_total = valor_litro_combustivel * quilometragem;
    total_gasto.innerHTML = valor_total;
}

function limpar(){
    document.getElementById("quilometragem").value = "";
    document.getElementById("valor_litro_combustivel").value = "";
    document.getElementById("total_gasto").value = "";
    document.getElementById("resultado").style.display = "none";
}