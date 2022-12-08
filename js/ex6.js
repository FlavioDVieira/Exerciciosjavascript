function ocultar_resultado() {
    /* ------- Oculta no carregamento da página o parágrafo 
         aonde o resultado é éxibido--------- */
    document.getElementById("resultado").style.display = "none";
}

function calcular() {    
    /* IF´s para Tratamento de erro - Se os campos estiverem em branco*/

    if (document.getElementById("qtde_altura").value == "") {
        alert("Digite o valor da altura.");
        document.getElementById("qtde_altura").focus();
    } else if (document.getElementById("opcao_sexo").value == "") {
        alert("Informe o sexo");
        document.getElementById("sexo").focus();
    }else{
        
        /* ------- Exibe no clique do botão o parágrafo 
         aonde o resultado é éxibido--------- */
        document.getElementById("resultado").style.display = "block";

        
        let h = parseFloat(document.getElementById("qtde_altura").value);
        let s = document.getElementById("opcao_sexo").value;
        /* São duas contas!
        Cálculo para homens:*/
        if (s == "m"){
            let peso_ideal_h = (72.7 * h) - 58;
            resultado_peso.innerHTML = peso_ideal_h;
        }else{
            /*Cálculo para mulheres:*/
            let peso_ideal_m = (62.1 * h) - 44.7;
            resultado_peso.innerHTML = peso_ideal_m;
        }               
    }
}

function limpar() {
    document.getElementById("qtde_altura").value = "";
    document.getElementById("opcao_sexo").value = "";
    document.getElementById("resultado_peso").value = "";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("qtde_altura").focus();
}