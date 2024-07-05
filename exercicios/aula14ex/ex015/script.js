function contar(){
    var inicio=document.querySelector('input#numi')
    var fim=document.querySelector("input#numf")
    var passo=document.querySelector('input#nump')
    var res=document.querySelector('div#res')
    if(inicio.value.length==0 || fim.value.length==0){
        alert('confere se os caixas obtem numero')
    }else if(passo.value.length==0){
        alert('ATENÇÃO o passo precisa ser 1 pelo menos')
    }else{
        var i=Number(inicio.value)
        var f=Number(fim.value)
        var p=Number(passo.value)
        
        if(p<=0){
            alert('passo invalido')
            p=1
        }
        if(i<f){
            for(var x=i; x<=f; x+=p){
                res.innerHTML+=`${x} \u{1F449}`
            }
            
        }
        else{
            for(var x=i;x>=f;x-=p){
                res.innerHTML+=`${x} \u{1F449}`
            }
            
        }
        res.innerHTML+=`\u{1F6D1}`
}
}