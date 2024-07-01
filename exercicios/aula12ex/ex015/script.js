function verificar(){
    var data=new Date
    var ano=data.getFullYear()
    var fano=document.querySelector('input#txtano')
    var res=document.querySelector('div#res')
    if(fano.value.lenght==0|| Number(fano.value)>ano){
        alert('[ERRO] Verique Novamente')
    }else{
        var sex=document.getElementsByName('sex')
        var idade= ano-Number(fano.value)
        var genero=""
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero='masculino'
            if(idade>=0 && idade<=13){
                img.scr='imagens/menino.jpg'
            }else if(idade<21){
                img.scr='imagens/menino21.jpg'
            }else if (idade<30){
                img.scr='imagens/cara30 anos.jpg'
            }else if (idade<55){
                img.scr='imagens/veio55anos.jpg'
            }
        }else if(sex[1].checked){
            genero='feminino'
            if(idade>=0 && idade<=13){
                img.scr='imagens/menina.jpg'
            }else if(idade<21){
                img.scr='imagens/menina21.jpg'
            }else if (idade<30){
                img.scr='imagens/mulher30anos.jpg'
            }else if (idade<55){
                img.scr='imagens/veia55anos.jpg'
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Você tem ${idade} anos e é do sexo ${genero}`
        res.appendChild(img)
    
    }
        
    
    
    
    /*if(calc>=0 && calc<=13 && fem){
         img.scr='imagens/menina.jpg'
    }else if( calc>=0 && calc<=13 && mas){
         img.scr='imagens/menino.jpg'
    }else if( calc>=14 && calc<=21 && fem){
         img.scr='imagens/menina21.jpg'
    }else if( calc>=14 && calc<=21 && mas){
         img.scr='imagens/menino21.jpg'
    }else if( calc>=22 && calc<=30 && fem){
        img.scr='imagens/mulher30anos.jpg'
    }else if(calc>=22 && calc<=30 && mas){
        img.scr='imagens/cara30 anos.jpg'
    }else if(calc>=31 && calc<=55 && fem){
        img.scr='imagens/veia55anos.jpg'
    }else if(calc>=31 && calc<=55 && mas){
        img.scr='imagens/veio55anos.jpg'          var calc= ano-idade
    res.innerHTML=`Sua idade é:${calc} e você é ${sex}`
    }*/
}