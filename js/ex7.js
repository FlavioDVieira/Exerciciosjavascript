var lista_numeros = [];

function ocultar_resultado() {
    /* ------- Oculta no carregamento da página o parágrafo 
         aonde o resultado é éxibido--------- */
    document.getElementById("resultado").style.display = "none";
}
function exibir_todos(){
    document.getElementById("resultado").style.display = "block";
    let total_numeros = document.getElementById("qtde_vetor").value;
    for (let i = 1; i <= total_numeros; i++ )
    {
        lista_numeros.push(i);        
    }
    resultado.innerHTML = lista_numeros;
}

function maior_valor(){
    document.getElementById("resultado").style.display = "block";
    let total_numeros = document.getElementById("qtde_vetor").value;
    for (let i = 1; i <= total_numeros; i++ )
    {
        lista_numeros.push(i);        
    }
    resultado.innerHTML = Math.max.apply(null, lista_numeros );
}

function menor_valor(){
    document.getElementById("resultado").style.display = "block";
    let total_numeros = document.getElementById("qtde_vetor").value;
    for (let i = 1; i <= total_numeros; i++ )
    {
        lista_numeros.push(i);        
    }
    resultado.innerHTML = Math.min.apply(null, lista_numeros );
}

function limpar(){
    document.getElementById("qtde_vetor").value = "";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("qtde_vetor").focus();
}