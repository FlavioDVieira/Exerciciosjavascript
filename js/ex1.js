function mostrar(){
    let v1 = parseInt(document.getElementById("v1").value);
    let res = document.getElementById("res");
    res.innerHTML="";
    for (let i = 1; i <= v1; i++){
        if(i % 2 == 0){
            res.innerHTML+= i+" - "
        }
    }
}