function conv_temp(){
    let val_temp_inicial = parseFloat(document.getElementById("val_temp_inicial").value);
    let temp_f = document.getElementById("temp_f");
    temp_f.innerHTML="";
    let temp_c = document.getElementById("temp_c");
    temp_c.innerHTML="";
    let F = val_temp_inicial;
    let C = val_temp_inicial;
    F = (C * 1.8) + 32;
    C = (F - 32) / 1.8;
    temp_f.innerHTML= parseFloat(F);
    temp_c.innerHTML= parseFloat(C);
}